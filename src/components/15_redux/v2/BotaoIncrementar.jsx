const BotaoIncrementar = ({incrementar}) => {
    return (
        <>
            <button
                onClick={
                    ()=>incrementar() //nao usar referência no on click
                }
            >id+1 </button>
        </>
    )
    
}
export default BotaoIncrementar