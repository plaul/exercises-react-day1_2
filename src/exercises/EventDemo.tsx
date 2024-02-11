import ImageButton from "../components/ImageButton";
import { BaseProps } from "../types";
import { useState } from "react";

export default function EventDemo1({ title }: BaseProps) {
  const [textFromBtn, setTextFromBtn] = useState("");
  return (
    <>
      <div className="title">{title}</div>
      <div className="info">
        Simple exercise to demonstrate how to pass event handlers to child components to
        let the parent react to the event.
        <br />
        Here, we have a simple ImageButton where users (parents) can react on the click
        event
      </div>
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        onClick={() => setTextFromBtn("Phone Button")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/d/dc/Teacup.svg"
        onClick={() => setTextFromBtn("TeaCup Button Clicked!")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/d/d4/Star_by_Gis%C3%A8le.png"
        onClick={() => setTextFromBtn("Start Button Clicked!")}
      />

      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/6/6c/Thumbs_up_green_with_plus_sign.svg"
        onClick={() => setTextFromBtn("+ Button Clicked!")}
      />

      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/240px-Flat_minus_icon_-_red.svg.png"
        onClick={() => setTextFromBtn("- Button Clicked!")}
      />
      <h3>{textFromBtn}</h3>
    </>
  );
}
