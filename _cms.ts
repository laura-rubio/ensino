import cms from "lume/cms/mod.ts";

const app = cms({
  site: {
    name: "Ensino",
    description: "Web de ensino de galego e portugués",
    body: `
    <h2>Elementos personalizados</h2>
    <dl>
      <dt><code>e-answer</code></dt>
      <dd>
        <p>Para poñer respostas por parte dos alumnos que logo que van a validar. O contido
      sería a resposta correcta. Pódese customizar con <code>size</code>, <code>placeholder</code>, <code>highlight</code> e <code>tip</code>.</p>
      </dd>

      <dt><code>e-validate</code></dt>
      <dd>
        <p>Botón que valida todas as respostas introducidas con <code>e-answer</code>.</p>
      </dd>

      <dt><code>e-tag</code></dt>
      <dd>
        <p>Mostra un texto curto (palabra, número, letras) en tamaño grande. Pódese customizar con <code>color</code> e <code>desc</code></p>
      </dd>

      <dt><code>e-layout</code></dt>
      <dd>
        <p>Para distribuír elementos dentro dunha grella predeterminada.</p>
      </dd>

      <dt><code>e-tip</code></dt>
      <dd>
        <p>Para meter textos ocultos dentro dun botón (?).</p>
      </dd>
      <dt><code>e-moji</code></dt>
      <dd>
        <p>Para meter emojis ou textos en tamaño grande.</p>
      </dd>
    </dl>

    <h2>Modificar imaxes</h2>
    <dl>
      <dt><code>{.is-square}</code></dt>
      <dd>
        <p>Para poñer as imaxes todas cadradas.</p>
      </dd>
      <dt><code>{.is-horizontal}</code></dt>
      <dd>
        <p>Para poñer as imaxes todas rectangulares en formato horizontal.</p>
      </dd>
    </dl>
    `,
  },
});

const tags = {
  name: "tags",
  type: "list",
  init(field) {
    field.options = field.cmsContent.data.site.search.values(
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
      tags,
      "draft: checkbox",
      "show_toc: checkbox",
      "content: markdown",
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
  ]);

export default app;
