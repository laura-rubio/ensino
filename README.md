# Ensino

Sitio con recursos de ensino de galego para secundaria

## Caracteres útiles

→

## Custom elements

### e-answer

Para poñer respostas por parte dos alumnos que logo que van a validar. O contido
sería a resposta correcta.

- size: Tamaño do campo
- placeholder: Texto por defecto
- highlight: Para destacar o campo por encima dos outros

Exemplo:

```html
Cal é a capital de Galicia?

<e-answer>Santiago de Compostela</e-answer>
```

### e-validate

Crea un botón que valida todas as respostas introducidas con `<e-answer>`.
Exemplo:

```html
<e-validate>Corrixe as respostas</e-validate>
```

### e-tag

Mostra un texto curto (palabra, número, letras) en tamaño grande.

- color: Cor que se vai empregar. Hai 10 temas diferentes, cada un representado
  por un número do 1 ao 10
- desc: Descripción curta que aparece debaixo do texto destacado

Exemplo:

```html
Números

<e-tag desc="un">1</e-tag>
<e-tag desc="dous">2</e-tag>
<e-tag desc="tres">3</e-tag>
```

### e-layout

Para distribuír elementos dentro dunha grella predeterminada

- type: Tipo de grella. Por defecto é `grid`

Exemplo:

```html
<e-layout>
  <e-tag desc="un">1</e-tag>
  <e-tag desc="dous">2</e-tag>
  <e-tag desc="tres">3</e-tag>
</e-layout>
```
