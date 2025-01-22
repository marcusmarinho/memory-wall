import { useEffect, useState } from 'react';
import * as S from './style';
import { supabase } from '../../supabase/config';
import { useNavigate } from 'react-router-dom';

interface ImageItem {
  id: number;
  created_at: Date;
  image_url: string; // Pode ser URL ou base64
}
export const HomePage: React.FC = () => {
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [_authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const fetchImages = async () => {
    const { data, error } = await supabase.from('imagens').select('*');

    if (error) {
      console.error('Erro ao buscar imagens:', error);
    } else {
      const processedImages = (data || []).map((image: ImageItem) => ({
        ...image,
        url: image.image_url.startsWith('data:') ? image.image_url : `data:image/jpeg;base64,${image.image_url}`,
      }));
      setImages(processedImages);
    }
  };
  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      setAuthenticated(true);
      fetchImages();
    } else {
      setAuthenticated(false);
      navigate('/');
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const handleFileClick = () => {
    const element = window.document.getElementById('getFile');
    if (element) {
      element.click();
    }
  };

  const addImage = async () => {
    if (!newImageFile) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result as string;

      const { data, error } = await supabase
        .from('imagens')
        .insert([{ image_url: base64String, created_at: new Date() }]);

      if (error) {
        console.error('Erro ao adicionar imagem:', error);
      } else {
        const processedImages = (data || []).map((image: ImageItem) => ({
          ...image,
          url: image.image_url.startsWith('data:') ? image.image_url : `data:image/jpeg;base64,${image.image_url}`,
        }));
        setImages((prev) => [...prev, ...processedImages]);
        setNewImageFile(null);
        fetchImages();
      }
    };

    reader.readAsDataURL(newImageFile);
  };

  const handleCleanState = () => {
    setNewImageFile(null);
  };

  return (
    <S.Container>
      <div>
        <h1>Mural de Memorias</h1>
      </div>

      <div>
        <div>
          <S.HeartIcon onClick={handleFileClick}>Clique aqui para adicionar uma memória</S.HeartIcon>
          {newImageFile?.name && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'baseline',
              }}
            >
              <p>Adicionado : {newImageFile.name}</p>{' '}
              <div>
                <S.SaveButton onClick={handleCleanState}> Cancelar</S.SaveButton>{' '}
                <S.SaveButton onClick={addImage}> Salvar</S.SaveButton>
              </div>
            </div>
          )}

          <input
            onChange={(e) => setNewImageFile(e.target.files ? e.target.files[0] : null)}
            type='file'
            id='getFile'
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <div>
        <S.ImageGrid>
          {images.map((image) => (
            <div key={image.id} style={{ textAlign: 'center' }}>
              <img
                src={image.image_url}
                alt={image.image_url}
                style={{ width: '100%', height: 'auto', borderRadius: 25 }}
              />
            </div>
          ))}
        </S.ImageGrid>
      </div>
    </S.Container>
  );
};
