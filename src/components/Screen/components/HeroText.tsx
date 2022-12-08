import mainLogo from '../../../assets/images/main_logo@2x.png';

export function HeroText({}) {
  return (
    <div className='flex flex-col items-center border border-red-400 mb-44'>
      <div className='w-32 mb-10'>
        <img src={mainLogo} alt='xund-logo' width={128} />
      </div>
      <h2 className='font-semibold text-xl text-deepblue'>
        Your health is in <i>your</i> hands
      </h2>
    </div>
  );
}
