import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [colorText, setColorText] = useState('#000');
  const [background, setBackgorund] = useState('#FFF');
  const [colorCopy, setColorCopy] = useState('');
  const [backgroundCopy, setBackroundCopy] = useState('');

  function handleCopyColor() {
    navigator.clipboard
      .writeText(colorText)
      .then(() => {
        toast.success(`Cor ${colorText} copiada com sucesso!`, {
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.error('Erro ao copiar cor: ', error);
      });
  }

  function handleCopyBackgroundColor() {
    navigator.clipboard
      .writeText(background)
      .then(() => {
        toast.success(`Background ${background} copiado com sucesso!`, {
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.error('Erro ao copiar background: ', error);
      });
  }

  return (
    <div className="mt-5 flex flex-col justify-center items-start max-w-xl m-auto">
      <label className="text-white font-medium text-2xl" htmlFor="">
        Personalize o botão
      </label>

      <div className="flex items-center gap-5">
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-white font-medium">Cor da Letra</label>
          <input
            type="color"
            value={colorText}
            onChange={(e) => setColorText(e.target.value)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <label className="text-white font-medium">Cor de fundo</label>
          <input
            type="color"
            value={background}
            onChange={(e) => setBackgorund(e.target.value)}
          />
        </div>
      </div>

      <button
        className="mt-5 text-center w-full font-semibold text-xl bg-white py-2 rounded-md select-none"
        style={{
          color: colorText,
          background: background,
        }}
      >
        Botão personalizado
      </button>

      <div className="mt-3 w-full">
        <label className="text-white font-medium text-2xl">
          Cores selecionadas:
        </label>

        <div className="flex gap-3 items-center justify-between">
          <div className="flex flex-col flex-1">
            <label className="text-white font-medium text-1xl mt-4" htmlFor="">
              Cor da letra:
            </label>
            <button
              onClick={handleCopyColor}
              className="font-medium bg-slate-200 p-2 rounded"
            >
              Copiar: {colorText}
            </button>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-white font-medium text-1xl mt-4" htmlFor="">
              Cor de fundo:
            </label>
            <button
              onClick={handleCopyBackgroundColor}
              className="font-medium bg-slate-200 p-2 rounded"
            >
              Copiar: {background}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
