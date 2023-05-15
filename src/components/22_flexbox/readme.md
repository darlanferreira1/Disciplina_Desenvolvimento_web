# FlexBox
- FLexible box
- alinhar elementos detnro de um container(caixa) de forma dinâmica
- a caixa normalmete é um elemento p ai
  - pode ser:
    - div
    - ul
    - etc
  - sempre o container será um elemento por fora do que a gente quer alinhar 

- display: flex
  - ``para identificar que a tag vai ser o elemento container do flexbox``
- flex direction
  - ``dizer qual vai ser a direção do eixo principal``
  - define qual o eixo principal dos elementos  
  - o padrão é ```row``` que é no eixo x
  - ```row-reverse``` é o eixo x invertido
  - ```column``` é o eixo y	
  - ```column-reverse``` é o eixo y invertido
  -   
    ```css
    /*exemplor*/
    .container {
    display: flex;
    flex-direction: row;
    }
    ```
- justify-content
  - ``para alinhar os elementos no eixo principal``
  - justify-content: flex-start;
    - alinha os elementos no inicio do eixo principal
  - justify-content: flex-end;
    - alinha os elementos no final do eixo principal
  - justfy-content: center;
    - alinha os elementos no centro do eixo principal
  - justify-content: space-between;
    - o primeiro no começo e o ultimo no canto e os outros no meio
  - justify-content: space-around;
    - todos os elementos com espaçamento igual
- align-items
  - ``para alinhar os elementos no eixo perpendicular``
  - align-items: flex-start;
    - alinha os elementos no inicio do eixo secundário
  - align-items: flex-end;
    - alinha os elementos no final do eixo secundário
  - align-items: center;
    - alinha os elementos no centro do eixo secundário
  - align-items: stretch;
    - estica os elementos no eixo secundário 
    - ocupando todo o espaço disponível
    - isso se não tiver um tamanho definido
  - align-items: baseline;
    - alinha os elementos pela base
    - se tiver um texto por exemplo
- flex-wrap
  - ``decidir se os elementos vão ou não pra linha de baixo quando chegarem no final de sua linha ``
  - nowrap
    - não quebra a linha
    - forçando todos os elementos para caberem na mesma linha
  - wrap
    - quebra a linha assim que um elemento não couber
  - wrap-reverse
    - quebra a linha assim que um elemento não couber
    - mas a quebra é invertida(pra cima )
- flex_flow
  - ``para identificar o flex-direction e o flex-wrap de uma vez só``
    ```css
    .container {
      display: flex;
      flex-flow: row wrap;
    }
    ```

- align-content
  - ```quando existe o flex-wrap e queremos alinhar as linhas em nosso eixo perpendicular``
  - alinhar elementos em mais de uma linha
  - flex-start
    - alinha as linhas no inicio do eixo secundário
  - flex-end
    - alinha as linhas no final do eixo secundário
  - flex-center
    - alinha as linhas no centro do eixo secundário
- gap, row-gap e column-gap
  - ``para fixar algum tammanho no espaço entre os elementos``
  - ```sejam eles lado ou linha a linha``
  - gap
    - define o espaçamento entre os elementos
    - gap: 20px;
  - row-gap
    - define o espaçamento entre as linhas
    - row-gap: 20px;
  - column-gap
    - define o espaçamento entre as colunas
    - column-gap: 20px;