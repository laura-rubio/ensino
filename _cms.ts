import cms from "lume/cms/mod.ts";

const app = cms({
  site: {
    name: "Ensino",
    description: "Web de ensino de galego e portugués",
    body: `
    <h2>Elementos personalizados</h2>
    <ul>
      <li><code>e-answer</code>
        Para poñer respostas por parte dos alumnos que logo que van a validar. O contido
      sería a resposta correcta. Pódese customizar con <code>size</code>, <code>placeholder</code>, <code>highlight</code> e <code>tip</code>.
      </li>

      <li><code>e-validate</code>
        Botón que valida todas as respostas introducidas con <code>e-answer</code>.
      </li>

      <li><code>e-tag</code>
        Mostra un texto curto (palabra, número, letras) en tamaño grande. Pódese customizar con <code>color</code> e <code>desc</code>
      </li>

      <li><code>e-layout</code>
        Para distribuír elementos dentro dunha grella predeterminada.
      </li>

      <li><code>e-tip</code>
        Para meter textos ocultos dentro dun botón (?).
      </li>

      <li><code>e-moji</code>
        Para meter emojis ou textos en tamaño grande.
      </li>
    </ul>

    <h2>Modificar imaxes</h2>
    <ul>
      <li><code>{.is-square}</code>
        Para poñer as imaxes todas cadradas.
      </li>

      <li><code>{.is-horizontal}</code>
        Para poñer as imaxes todas rectangulares en formato horizontal.
      </li>
    </ul>
    `,
  },
});

const tags = {
  name: "tags",
  type: "list",
  init(field, { data }) {
    field.options = data.site.search.values(
      "id",
      "type=category",
    );
  },
};

app
  .upload("imaxes", "src:img")
  .collection({
    name: "posts",
    store: "src:posts/*.md",
    nameField: "title",
    fields: [
      "title: text",
      "summary: textarea",
      "extraHead: code",
      tags,
      "draft: checkbox",
      "show_toc: checkbox",
      {
        name: "content",
        type: "markdown",
        snippets: [
          {
            label: "Resposta",
            value: "<e-answer>{$}</e-answer>",
          },
          {
            label: "Verificar resposta",
            value: "<e-validate>Verifica as respostas</e-validate>",
          },
          {
            label: "Etiqueta",
            value: "<e-tag>{$}</e-tag>",
          },
          {
            label: "Pista",
            value: "<e-tip>{$}</e-tip>",
          },
          {
            label: "Emoji",
            value: "<e-moji>{$}</e-moji>",
          },
          {
            label: "Imaxe cadrada",
            value: "{.is-square}",
          },
          {
            label: "Imaxe horizontal",
            value: "{.is-horizontal}",
          }
        ],
      }
    ],
  })
  .collection("paxinas", "src:pages", [
    "title: text",
    "url: text",
    "content: markdown",
  ])
  .collection("categorías", "src:categories", [
    "title: text",
    "id: text",
    tags,
  ])
  .auth({
    laura: "Gatuna01",
  })
  .git({
    prodBranch: "master",
  });

export default app;
