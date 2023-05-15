const BotaoDecrementar = ({decrementar}) => {
    return (
        <>
        <button
        onClick={
            ()=>decrementar() //nao usar referência no on click
        }
        > id-1 </button>
        </>
    )
}
export default BotaoDecrementar
