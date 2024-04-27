const contenedorProyectos = document.querySelector("#proyectos");

//eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarProyectos(proyectos);
});

function mostrarProyectos(proyectos) {
  const proyectosRecientes = proyectos.slice(0, 4);

  proyectosRecientes.forEach((proyecto) => {
    const {
      titulo,
      descripcion,
      repositorio,
      tecnologias,
      tipo,
      fecha,
      enlace,
      imagen,
    } = proyecto;

    //Articulo del proyecto
    const proyectoArticle = document.createElement("article");
    proyectoArticle.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "md:flex-row",
      "md:w-full"
    );

    //Imagen del proyecto
    const proyectoImg = document.createElement("img");
    proyectoImg.classList.add(
      "object-cover",
      "w-full",
      "h-auto",
      "rounded-t-lg",
      "md:h-full",
      "md:w-1/2",
      "md:rounded-none",
      "md:rounded-s-lg"
    );
    proyectoImg.setAttribute("src", imagen);
    proyectoImg.setAttribute("alt", `Imagen del proyecto ${titulo}`);

    //Div que contiene la informacion del proyecto
    const proyectoContenido = document.createElement("div");
    proyectoContenido.classList.add(
      "flex",
      "flex-col",
      "justify-between",
      "p-4",
      "leading-normal"
    );

    //Titulo del proyecto
    const proyectoTitulo = document.createElement("h3");
    proyectoTitulo.classList.add(
      "mb-1",
      "text-2xl",
      "font-bold",
      "tracking-tight",
      "text-white"
    );
    proyectoTitulo.textContent = titulo;

    //Fecha del proyecto
    const proyectoFecha = document.createElement("time");
    proyectoFecha.classList.add(
      "block",
      "mb-2",
      "text-sm",
      "font-normal",
      "leading-none",
      "text-gray-400"
    );
    proyectoFecha.textContent = fecha;

    //Descripcion del proyecto
    const proyectoDescripcion = document.createElement("p");
    proyectoDescripcion.classList.add(
      "text-sm",
      "m-0",
      "text-gray-400",
      "mt-2"
    );
    proyectoDescripcion.textContent = descripcion;

    //Tags de tecnologias del proyecto
    const proyectoTags = document.createElement("div");
    proyectoTags.classList.add("flex", "gap-2");
    tecnologias.forEach((tag) => {
      const iconoContenedor = document.createElement("span");
      iconoContenedor.classList.add(
        "text-white",
        "flex",
        "flex-row-reverse",
        "items-center",
        "gap-1",
        "rounded-lg",
        "bg-blue-900",
        "text-blue-300",
        "px-3",
        "py-1",
        "text-[12px]",
        "uppercase"
      );
      const icono = document.createElement("i");
      icono.classList.add("bx", `bxl-${tag}`, "text-white");
      iconoContenedor.textContent = tag;
      iconoContenedor.appendChild(icono);
      proyectoTags.appendChild(iconoContenedor);
    });

    //Enlaces Git y Demo
    const proyectoEnlaces = document.createElement("div");
    proyectoEnlaces.classList.add("flex", "gap-2", "mt-2");
    const proyectoDemo = document.createElement("a");
    proyectoDemo.setAttribute("href", enlace);
    proyectoDemo.setAttribute("target", "_blank");
    const proyectoDemoIcono = document.createElement("i");
    proyectoDemoIcono.classList.add("bx", "bx-link", "text-white", "text-xl");

    proyectoDemo.classList.add(
      "text-white",
      "inline-flex",
      "gap-2",
      "items-center",
      "py-1",
      "px-3",
      "bg-gray-800",
      "rounded-xl"
    );
    proyectoDemo.textContent = "Demo";
    const proyectoGithub = document.createElement("a");
    proyectoGithub.setAttribute("href", repositorio);
    proyectoGithub.setAttribute("target", "_blank");
    const proyectoGithubIcono = document.createElement("i");
    proyectoGithubIcono.classList.add(
      "bx",
      "bxl-github",
      "text-white",
      "text-xl"
    );

    proyectoGithub.classList.add(
      "text-white",
      "inline-flex",
      "gap-2",
      "items-center",
      "py-1",
      "px-3",
      "bg-gray-800",
      "rounded-xl"
    );
    proyectoGithub.textContent = "Github";

    proyectoDemo.appendChild(proyectoDemoIcono);
    proyectoGithub.appendChild(proyectoGithubIcono);

    proyectoEnlaces.appendChild(proyectoDemo);
    proyectoEnlaces.appendChild(proyectoGithub);
    //Agregar elementos al div de la informacion
    proyectoContenido.appendChild(proyectoTitulo);
    proyectoContenido.appendChild(proyectoFecha);
    proyectoContenido.appendChild(proyectoTags);
    proyectoContenido.appendChild(proyectoDescripcion);
    proyectoContenido.appendChild(proyectoEnlaces);

    //Agregar imagen y contenido al article
    proyectoArticle.appendChild(proyectoImg);
    proyectoArticle.appendChild(proyectoContenido);

    //Agregar proyectos al contenedor
    contenedorProyectos.appendChild(proyectoArticle);
  });
}
