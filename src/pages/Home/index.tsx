import { useEffect, useState } from 'react';
import * as S from './style';
import { Input } from '../Login/style';
import { supabase } from '../../supabase/config';
import { Route, useNavigate } from 'react-router-dom';

interface ImageItem {
  id: number;
  created_at: Date;
  image_url: string; // Pode ser URL ou base64
}
export const HomePage: React.FC = () => {
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const fetchImages = async () => {
    const { data, error } = await supabase.from('imagens').select('*');

    if (error) {
      console.error('Erro ao buscar imagens:', error);
    } else {
      // Converta base64 para exibição
      const processedImages = (data || []).map((image: ImageItem) => ({
        ...image,
        url: image.image_url.startsWith('data:') ? image.image_url : `data:image/jpeg;base64,${image.image_url}`,
      }));
      console.log('processedImages', processedImages);
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

  return (
    <S.Container>
      <div>
        <h1>Mural de Memorias</h1>
      </div>

      <div>
        <S.FileUpload
          id='fileUpload'
          type='file'
          accept='image/*'
          onChange={(e) => setNewImageFile(e.target.files ? e.target.files[0] : null)}
        />
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
