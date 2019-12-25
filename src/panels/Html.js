import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import connect from "@vkontakte/vk-connect";
import "./Persik.css";

const Home = ({ id, go, fetchedUser }) => {
  const receivingUserId = 154522988;

  return (
    <Panel id={id}>
      <PanelHeader>CodeBook - HTML</PanelHeader>

      <Group>
        <Div>
          <Button size="xl" level="2" onClick={go} data-to="tags">
            <a>Справочник по тегам</a>
          </Button>
        </Div>
      </Group>

      <Group title="Обучение">
        <Div>
          <Button size="xl" level="2" onClick={go}>
            <a>Введение</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Инструментарий</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Теги</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Структура HTML-кода</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Типы тегов</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Значения атрибутов тегов</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Текст</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Ссылки</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Якоря</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Изображения</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Списки</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Таблицы</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Фреймы</a>
          </Button>
        </Div>
        <Div className="margin_top1">
          <Button size="xl" level="2" onClick={go}>
            <a>Валидация документов</a>
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
