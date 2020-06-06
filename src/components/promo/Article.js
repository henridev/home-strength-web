import React from "react"

export default function Article() {
  return (
    <article class="flex flex-col shadow my-4">
      <a class="hover:opacity-75">
        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
        <a class="text-3xl font-bold hover:text-gray-700 pb-4">
          Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
        </a>
        <p class="text-sm pb-3">
          By <a class="font-semibold hover:text-gray-800">David Grzyb</a>,
          Published on April 25th, 2020
        </p>
        <a class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
          dui porta volutpat. In sit amet posuere magna..
        </a>
        <a class="uppercase text-gray-800 hover:text-black">
          Continue Reading{" "}
          <svg
            class="svg-inline--fa fa-arrow-right fa-w-14"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
            ></path>
          </svg>{" "}
          <i class="fas fa-arrow-right"></i>{" "}
        </a>
      </div>
    </article>
  )
}
