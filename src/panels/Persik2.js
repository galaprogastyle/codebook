import React from "react";
import PropTypes from "prop-types";
import { platform, IOS, Group, Gallery, Div, Button } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import dva from "../img/2.jpg";
const osName = platform();

const Persik2 = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <HeaderButton onClick={props.go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </HeaderButton>
      }
    >
      Картинка справа
    </PanelHeader>
    <Group title="Заголовок картинки">
      <Gallery bullets="light" className="img">
        <img src={dva} />
      </Gallery>
    </Group>
    <Group title="Описание">
      <p>Текст описывающий картинку</p>
      <Div className="button">
        <Button className="button" size="xl" level="2">
          Не работающая кнопка
        </Button>
      </Div>
    </Group>
  </Panel>
);

Persik2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Persik2;
