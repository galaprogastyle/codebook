import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import { Footer, Progress, InfoRow } from "@vkontakte/vkui";
import connect from "@vkontakte/vk-connect";
import "./style.css";
import odin from "../img/1.jpg";
import dva from "../img/2.jpg";

const Home = ({ id, go, fetchedUser }) => {
  const receivingUserId = 154522988;
  const sendChtoto = () => {
    connect.send("VKWebAppOpenPayForm", {
      action: "transfer-to-user",
      app_id: 7154173,
      params: {
        description: "На развитие сервиса",
        user_id: receivingUserId
      }
    });
  };
  return (
    <Panel id={id}>
      <PanelHeader>Технологии интернета вещей</PanelHeader>
      {fetchedUser && (
        <Group title="Студент, изучающий материал">
          <Cell
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )}
      <Group title="Выбор темы">
        <Div>
          <Button className="button1" onClick={go} data-to="Lab">
            Ответы на все темы
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580054?hash=fda2eb5e286f11686f&dl=29018e14ad139daee9">
              Технологии передачи сигналов
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580075?hash=0b144230836b06b7c8&dl=c017d09eec843176c8">
              Технологии мультиплексирования
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580130?hash=b64c427668c3d353a3&dl=5cd387371d39b28aa7">
              Технологии коммутации
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580160?hash=0cf02f3b06edda83c0&dl=25217f1b58cea79610">
              Основы интернета вещей
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580171?hash=8f1a029c9280e4b71d&dl=2f831bce620dc8ec24">
              Интернет вещей идентификация
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580191?hash=6e1a54c4b62a06342c&dl=cc44b029fc194cb21c">
              Особенности сетей
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580193?hash=97d99c8e9ba14dc704&dl=fd1d70285e5521d283">
              Эталонные модели
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580207?hash=774a414ee35b8c173e&dl=92d95b32fbd948d0ba">
              Протоколы
            </a>
          </Button>
        </Div>
        <Div>
          <Button className="button">
            <a href="https://vk.com/doc154522988_521580214?hash=006dae1b71fd29de73&dl=2de9f948f161f58145">
              Технологии
            </a>
          </Button>
        </Div>
      </Group>

      <Group>
        <Div>
          <Button size="xl" level="2" onClick={sendChtoto}>
            Donate
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
