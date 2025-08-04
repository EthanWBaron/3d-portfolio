export default function Loader(){
    return (
        <div className="flex items-center justify-center min-h-screen w-full"
             style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
        }}>
            <img
                src='/loading.gif'
                alt='Loading...'
                className="w-64 h-64 object-contain"
            />
        </div>
    )
}