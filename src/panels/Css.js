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
import odin from "../img/1.jpg";

const Home = ({ id, go, fetchedUser }) => {
  return (
    <Panel id={id}>
      <PanelHeader>CodeBook - CSS</PanelHeader>

      <Group title="С чего начнем?">
        <Div>
          <Button className="Button11" level="2">
            <a>HTML</a>
          </Button>
        </Div>
        <Div>
          <Button className="Button11" level="2">
            <a>CSS</a>
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
