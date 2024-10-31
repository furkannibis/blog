export const BentoGrid = () => {
    return (
        <section
            className='bento grid-mobile-layout sm:grid-sm-layout xl:grid-xl-layout mx-auto grid max-w-[375px] grid-cols-2 gap-2 *:rounded-3xl *:bg-no-repeat sm:max-w-screen-sm xl:max-w-screen-xl xl:grid-cols-4'>
            <div className="grid-item-a aspect-square rounded-3xl bg-cover bg-center bg-no-repeat sm:aspect-[2.1/1] xl:aspect-auto" role="img" aria-label="introduction" rel="preload"></div>
            <div className='grid-item-b bg-black aspect-square'></div>
            <div className='grid-item-c bg-center bg-no-repeat bg-cover aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />
            <div className='grid-item-d bg-black sm:aspect-square'></div>
            <div className='grid-item-e bg-cover bg-center bg-no-repeat relative aspect-[6/5] sm:aspect-[2.1/1] sm:items-center xl:aspect-auto'></div>
            <div className='grid-item-f bg-black aspect-square rounded-3xl bg-center bg-no-repeat sm:aspect-[2.1/1] xl:aspect-auto'></div>
            <div className="grid-item-g bg-cover bg-center bg-no-repeat relative aspect-square"></div>
            <div className='grid-item-h bg-cover bg-center bg-no-repeat aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />
            <div className='grid-item-i bg-black relative flex aspect-square items-center justify-center'></div>
            <div className='grid-item-j relative bg-cover bg-center bg-no-repeat aspect-square'></div>
            <div className='grid-item-k relative bg-cover bg-center bg-no-repeat aspect-square'></div>
        </section>
    );
}