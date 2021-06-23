import { useParams } from "react-router-dom";

import { RoomCode } from "../components/RoomCode";
import { Button } from "../components/Button";

import logoImg from "../assets/images/logo.svg";

import "../styles/room.scss";

type RoomParams = {
  id: string
}

export function Room() {
  const params = useParams<RoomParams>();
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask"/>
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea 
            placeholder="O que você quer perguntar?"
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar Pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}