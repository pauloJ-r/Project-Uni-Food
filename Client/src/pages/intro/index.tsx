import {uni} from '../../assets/imagens.ts'
import LoadingButton from '@/components/loadingbutton.tsx';
function Intro() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>

        <img className='w-45 h-45' src={uni} alt="" />
        <div className='flex flex-col items-center text-center gap-4 pt-8 m-4'>
        <h1 className='text-4xl font-'>Bem Vindo ao UniFood</h1>
        <p className='text-lg text-justify mt-4'>Facilitando sua vida no campus: compre e venda lanches com facilidade.</p>
        </div>
        <div className='flex flex-col items-center text-center pt-10'>
        <LoadingButton text="Vamos Começar" to="/intro" />
        </div>
      </div>
    </>
  )
}

export default Intro;
