import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/config';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { forceHashUrl } from '../../hooks';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'pristine' | 'success' | 'error'>('loading');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Erro no login:', error.message);
      setError(error.message);
      setAuthenticated(false);
    } else {
      navigate('/home');
      setAuthenticated(true);
    }
  };

  const checkSession = async () => {
    setStatus('loading');
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      setAuthenticated(true);
      navigate('/home');
    } else {
      setAuthenticated(false);
    }
    setStatus('success');
  };
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <S.Container>
      {status === 'loading' && <h1>Carregando...</h1>}
      {status === 'success' && (
        <S.FormWrapper>
          <S.Title>Login</S.Title>

          <div>
            <S.Input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <S.Input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <S.Button type='submit' onClick={handleLogin}>
              Entrar
            </S.Button>
          </div>
        </S.FormWrapper>
      )}
    </S.Container>
  );
};
