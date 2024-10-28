export const BentoGrid = () => {
    return(
    <section 
        className='bento grid-xl-layout sm:grid-sm-layout xl:grid-xl-layout mx-auto grid max-w-[375px] grid-cols-2 gap-4 *:rounded-3xl *:bg-no-repeat sm:max-w-screen-sm xl:max-w-screen-xl xl:grid-cols-4'>
        <div className="grid-item-a bg-black aspect-square rounded-3xl bg-center bg-no-repeat sm:aspect-[2.1/1] xl:aspect-auto"></div>
        <div className='grid-item-b bg-black aspect-square'></div>
        <div className='grid-item-c bg-black aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />
        <div className='grid-item-d bg-black sm:aspect-square'></div>
        <div className='grid-item-e bg-black relative flex aspect-[6/5] items-start overflow-hidden p-4 sm:aspect-[2.1/1] sm:items-center xl:aspect-auto'></div>
        <div className='grid-item-f bg-black relative flex aspect-square items-center justify-center overflow-hidden sm:aspect-[2.1/1] xl:aspect-auto'></div>
        <div className="grid-item-g bg-black relative aspect-square"></div>
        <div className='grid-item-h bg-black aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />
        <div className='grid-item-i bg-black relative flex aspect-square items-center justify-center'></div>
        <div className='grid-item-j bg-black grid-item-i-overlay relative aspect-square'></div>
        <div className='grid-item-k bg-black relative flex aspect-square items-center justify-center'></div>
    </section>
    );
}