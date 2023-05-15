css syntax

```css
seletor{
    /* bloco de declaração */
    propriedade: valor;
    /* ex.: */
    color: red;
    font-size: 16px;
}
```

pode ser colocado direto no elemento html

```html

<p style=
    "color: red;
    font-size: 16px;
    ">texto</p>
```

ou com a tag ````<style> </style>```

```html
<style>
    /* tudo que for p vai ser vermelho */
    p{
        color: red;
        font-size: 16px;
    }
</style>
```

ou criando o .css com todos os seus seletores

se eu quiser p diferente de todos os outros p's eu crio uma ```CLASSE``` pra ele, exemplo:
    
    - p.principal

``` html
    <p
    class="principal">
    texto
    </p>
```

e no css

```css
    p.principal{
        color: red;
        font-size: 16px;
    }
```
- se eu colocar a class principal em um h1, por exemplo, ele vai herdar as propriedades do p.principal

#### id
- o id é pra ser usado só pra um elemento, então
- se um h1 recebe o id título não poderei usar esse id="titulo" pra nenhum elemento
- no css se chama com # 