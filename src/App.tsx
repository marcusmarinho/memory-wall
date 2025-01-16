// import React, { useState, useEffect } from 'react';

// import * as S from './style';

// import { supabase } from './supabase/config';

// interface ImageItem {
//   id: number;
//   created_at: Date;
//   image_url: string; // Pode ser URL ou base64
// }

// const ImageUploader: React.FC = () => {
//   const [uploading, setUploading] = useState(false);
//   const [images, setImages] = useState<ImageItem[]>([]);
//   const [newImageFile, setNewImageFile] = useState<File | null>(null);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [authenticated, setAuthenticated] = useState(false);

//   const fetchImages = async () => {
//     const { data, error } = await supabase.from('imagens').select('*');

//     if (error) {
//       console.error('Erro ao buscar imagens:', error);
//     } else {
//       // Converta base64 para exibição
//       const processedImages = (data || []).map((image: ImageItem) => ({
//         ...image,
//         url: image.image_url.startsWith('data:') ? image.image_url : `data:image/jpeg;base64,${image.image_url}`,
//       }));
//       console.log('processedImages', processedImages);
//       setImages(processedImages);
//     }
//   };

//   const addImage = async () => {
//     if (!newImageFile) return;

//     const reader = new FileReader();
//     reader.onload = async () => {
//       const base64String = reader.result as string;

//       const { data, error } = await supabase
//         .from('imagens')
//         .insert([{ image_url: base64String, created_at: new Date() }]);

//       if (error) {
//         console.error('Erro ao adicionar imagem:', error);
//       } else {
//         const processedImages = (data || []).map((image: ImageItem) => ({
//           ...image,
//           url: image.image_url.startsWith('data:') ? image.image_url : `data:image/jpeg;base64,${image.image_url}`,
//         }));
//         setImages((prev) => [...prev, ...processedImages]);
//         setNewImageFile(null);
//       }
//     };

//     reader.readAsDataURL(newImageFile);
//   };

//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.error('Erro no login:', error.message);
//       setAuthenticated(false);
//     } else {
//       setAuthenticated(true);
//       fetchImages();
//     }
//   };

//   useEffect(() => {
//     if (authenticated) {
//       fetchImages();
//     }
//   }, [authenticated]);

//   const checkSession = async () => {
//     const { data } = await supabase.auth.getSession();
//     if (data.session) {
//       setAuthenticated(true);
//       fetchImages(); // Carregar imagens se autenticado
//     } else {
//       setAuthenticated(false);
//     }
//   };

//   useEffect(() => {
//     checkSession();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       {!authenticated ? (
//         <div>
//           <h2>Login</h2>
//           <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button onClick={handleLogin}>Entrar</button>
//         </div>
//       ) : (
//         <div>
//           <S.Title>Mural de memorias</S.Title>
//           <input
//             type='file'
//             accept='image/*'
//             onChange={(e) => setNewImageFile(e.target.files ? e.target.files[0] : null)}
//           />
//           <button onClick={addImage} disabled={uploading} style={{ marginLeft: '10px' }}>
//             {uploading ? 'Enviando...' : 'Fazer Upload'}
//           </button>

//           <h2>Imagens</h2>
//           <S.ImageGrid>
//             {images.map((image) => (
//               <div key={image.id} style={{ textAlign: 'center' }}>
//                 <img src={image.image_url} alt={image.image_url} style={{ width: '100%', height: 'auto' }} />
//               </div>
//             ))}
//           </S.ImageGrid>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploader;

import { ProjectRoutes } from './routes';
function App() {
  return <ProjectRoutes></ProjectRoutes>;
}

export default App;
