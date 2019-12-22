import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./style.css";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { platform, IOS } from "@vkontakte/vkui";
import img1 from "./multi.jpg";
import img2 from "./LPWAN.jpg";
import img3 from "./zigbee.jpg";
import img4 from "./biznes.jpg";
import img5 from "./mse.jpg";
import img6 from "./modal.jpg";
import img7 from "./mnogo.jpg";
import img8 from "./stan.jpg";
const osName = platform();
const Lab = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </HeaderButton>
        }
      >
        Ответы по темам
      </PanelHeader>
      <a name="top"> </a>
      <Group title="Новые билеты комиссия">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#bi23">23</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии передачи сигналов">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t24">24</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t25">25</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t26">26</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t27">27</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t28">28</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t29">29</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t30">30</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t31">31</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t32">32</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t33">33</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t34">34</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t35">35</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t36">36</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t37">37</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t38">38</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t39">39</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t40">40</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t41">41</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t42">42</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии мультиплексирования">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m24">24</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии коммутации">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k24">24</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k25">25</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k26">26</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k27">27</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k28">28</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k29">29</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k30">30</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k31">31</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k32">32</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k33">33</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k34">34</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k35">35</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Основы интернета вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i20">20</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Идентификация в интернете вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id20">20</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Особенности сетей / Сенсорные сети">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o14">14</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Эталонные модели интернета вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e13">13</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Протоколы">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p21">21</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Технологии">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt21">21</a>
          </Button>
        </Div>
      </Group>
     
      <br></br>
      <Group title="Новые билеты комиссия">
        <Div>
          <p>
            <a name="bi1" style={{ color: "red" }}>
              1. Классификация базовых сетевых технологий. Принципы построения
              технологий передачи сигналов, мультиплексирования и коммутации.
              <br></br>
              2. Физический уровень IEEE 802.x. Спектр сигнала. Технологии
              расширения спектра. Модуляция и манипуляция.
            </a>
            <br></br>
            1.
            <br></br>
            1)Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю. (физ. процесс -
            электромагнитное воздействие).
            <br></br>
            Линия связи - это совокупность физической среды и технических
            устройств, обеспечивающих передачу сигналов. Проводные (определенные
            характеристики), беспроводные (зависят от природы). Симметричный
            кабель, коаксиальный кабель, электропровода, волоконно-оптический
            кабель, линии радиосвязи(радиоволны).
            <br></br>
            2)Технологии мультиплексирования (уплотнения) – позволяет повысить
            использование физических сетевых ресурсов, обеспечивающих процесс
            передачи.
            <br></br>- к одной и той же линии при помощи специального
            оборудования (мультиплексора) подключается несколько отправителей
            сообщений;
            <br></br>- сообщения всех отправителей одновременно перемещаются к
            получателям на приемную сторону.
            <br></br>- получатели на приемной стороне при помощи
            демультиплексора принимают из линии связи каждый свое сообщение.
            <br></br>
            <img src={img1} />
            <br></br>
            3)Технология коммутации - предназначена для организации совместного
            использования сетевых ресурсов, образованных в результате
            мультиплексирования.
            <br></br>- телекоммуникационная технология, с помощью которой 1)
            занимаются каналы связи и 2) строятся сетевые соединения. Центры
            коммутации. Адресная информация занимает часть сетевых ресурсов.
            <br></br>
            2.
            <br></br>
            Физический уровень 802.x. управляет формированием и передачей битов
            данных по физической среде - кабелю или эфиру. Здесь
            стандартизируются частотные диапазоны, скорости передачи данных,
            параметры среды передачи, уровни сигналов. Важная функция -
            физическое кодирование данных и побитовая синхронизация.
            <br></br>МОДУЛЯЦИЯ– это операция изменения параметров
            электромагнитного колебания (частоты, амплитуды и (или) фазы) в
            соответствии с передаваемым сообщением. В результате модуляции
            образуется сигнал, который переносит информацию. Теория Фурье
            позволяет разложить сигнал на ряд синусоид (гармоник), отличающихся
            своими параметрами.
            <br></br>СПЕКТР СИГНАЛА – это набор таких гармоник.
            <br></br>МАНИПУЛЯЦИЯ – это модуляция дискретного сигнала.
            <br></br>Технологии расширения СПЕКТРА:
            <br></br>- скачкообразная перестройка частоты,
            <br></br>- метод линейной частотной модуляции,
            <br></br>- прямое последовательное расширение спектра.
          </p>
          <br></br>
          <p>
            <a name="bi2" style={{ color: "red" }}>
              1.Основы технологий частотного мультиплексирования. Технология
              ADSL. 2.Технологии дальнего радиуса действия (LPWAN). LoRaWAN.
              "СТРИЖ".
            </a>
            <br></br>
            1.
            <br></br>
            Мультиплексирование с разделением по частоте FDM - электромагнитные
            колебания, частоты которых отличаются на достаточно большую
            величину, энергетически не взаимодействуют друг с другом,
            распространяясь в одной и той же физической среде. Предполагает, что
            каналы занимают относительно узкие частотные полосы в отведенных для
            них частотных диапазонах. Каждый входной сигнал накладывается на
            частоту своего канала(несущая), поэтому не перекрывается с другими
            входными сигналами. Фильтрация - выделение определенного сигнала.
            Для реализации нужны генераторы и фильтры.
            <br></br>ADSL (модемная технология) - асинхронная цифровая линия, в
            которой каналы для приема данных имеют более высокую скорость, чем
            каналы для передачи данных. Плюс - можно использовать старую медную
            инфраструктуру на абонентском участке. Передача сигналов реализуется
            при помощи модема, и мультиплексора DSLAM - находится на АТС.
            0.3-3.4кГЦ - телефонный сигнал. 26кГЦ-1.1МГЦ - цифровые данные.
            фильтр- частотный разделитель (голос - низкочастотные, данные -
            высокочастотные.)Исходящие - низкие частоты, входящие - высокие.
            <br></br>2.
            <br></br>/// LPWAN (low power wide-area network) - энергоэффективная
            сеть дальнего радиуса действия. - технология передачи небольших по
            обьему данных на дальние расстояния, разработанная для интернета
            вещей.
            <img src={img2} />
            <br></br>LoRaWAN использует топологию звезда для связи удаленных
            конечных узлов сенсорной сети, имеющих батарейное питание, со
            шлюзом. Шлюзы пересылают данные между конечными узлами и центральным
            сервером сети.
            <br></br>СТРИЖ - отечественная технология класс LPWAN, использует
            узкополосный метод метод модуляции радиосигнала и адаптирована для
            масштабного использования в РФ и странах СНГ. Использует свой
            собственный протокол связи - XNB, предназначенный для передачи
            данных телеметрии на низких скоростях и на дальние расстояния.
            Топология похожа на принцип работы мобильных сетей - "звезда из
            звезд". Конечные устройства передают показания в интернет через
            базовую станцию. Далее на серверах "СТРИЖ" данные обрабатываются и
            предоставляются в удобном виде в специально разработанном
            веб-интерфейсе.
          </p>
          <br></br>
          <p>
            <a name="bi3" style={{ color: "red" }}>
              1. Основы технологий временного мультиплексирования. Требования к
              сетевой синхронизации. 2.Протокол маршрутизации в сенсорных сетях
              PEGASIS.
            </a>
            <br></br>
            1.
            <br></br>
            Временное мультиплексирование TDM - электромагнитные колебания
            энергетически не взаимодействуют с друг другом, так как занимают
            одну и ту же физическую среду в разные периоды времени. Для
            реализации необходимо синхронизировать работу источников сигналов.
            <br></br>
            Синхронизация - согласованная скорость нескольких процессов. 1)
            частотная синхронизация - все процессы соответствуют одной и той же
            частоте (скорости). 2) Фазовая - средняя частота + должны быть
            близки фазы событий. 3) Временная - фазы привязаны к временной
            шкале.
            <br></br>
            2.
            <br></br>
            PEGASIS - используется для построения энергосберегающей сенсорной
            информационной системы. Построение в цепи. Данные для передачи
            собираются от конечных узлов последовательно.
          </p>
          <br></br>
          <p>
            <a name="bi4" style={{ color: "red" }}>
              1. Основы технологий кодового мультиплексирования. Функции Уолша и
              их свойства. Кодовое разделение на примере 2 каналов. 2.Протокол
              маршрутизации в сенсорных сетях LEACH.
            </a>
            <br></br>
            1.
            <br></br>
            Потоки существуют в одном частотно-временном диапазоне. Для передачи
            каждого потока используются коды (n-значные, двоичные коды). В
            качестве кодов используются ортогональные вектора. Каждый
            пользователь использует свой вектор. Для декодирования сигнала
            вычисляется корреляция между принятым сигналом и кодом пользователя.
            Ортогональность кодов позволяет восстановить сигнал любого
            пользователя без помех.
            <br></br>В качестве ортогональных чип-кодов в системах CDMA
            применяют функции Уолша. Это семейство кодов, образующих
            ортогональную систему со значениями 1 и -1 на всей области
            определения.
            <br></br>
            2.
            <br></br>
            Протокол LEACH - энергосберегающей адаптивной иерархической
            кластеризации. Каждый узел с определенной вероятностью принимает
            решение о создании кластера. Вероятность вычисляется исходя из
            требуемого количества кластеров, количества узлов в сети, запаса
            энергии узла и количества этапов, которое прошло с момента
            назначения узла головным. Рассылает запрос на присоединение соседей.
            Узлы выбирают ближайшие головные узлы и информируют его. Формируется
            расписание активности узлов кластера для избежания коллизий.
          </p>
          <br></br>
          <p>
            <a name="bi5" style={{ color: "red" }}>
              1.Причины и последствия использования центров коммутации на сетях
              связи. 2.Протокол маршрутизации в сенсорных сетях AODV.
            </a>
            <br></br>
            1.
            <br></br>
            Использование центров коммутации, реализующих технологии коммутации,
            позволяет получить экономически оправданные решения для сетей связи
            любой емкости.
            <br></br>Они организуют доступ большой группы пользователей к
            ограниченному количеству ресурсов, при помощи которых может быть
            построено ограниченное этим количеством соединений. РЕАЛИЗУЕТСЯ
            программными средствами.
            <br></br>Последствия - сети большой емкости приобретают
            многоуровневую иерархическую структуру; получение адресной
            информации - отнимает сетевые ресурсы; вероятность отказа или
            задержки из-за перегрузки. пропускная способность меньше, чем
            количество данных которое может быть заявлено для передачи.
            <br></br>2.
            <br></br>AODV - топологический, реактивный, одномаршрутный,
            одноуровневый. Используется в сетях с ячеистой топологией (напр.
            ZigBee). Алгоритм поиска маршрута:
            <br></br>1) Источник отправляет широковещательный запрос на поиск
            маршрута к адресату
            <br></br>2) Каждое устройство вносит запись в таблицу маршрутизации,
            и отправляет дальше, (логическое расстояние), так продолжается пока
            не дойдет до адресата
            <br></br>3) Адресат отправляет данные по минимальному пути
            (логическому расстоянию), и тд пока не вернется обратно.
            <br></br>4) Ответ, вернувшись по оптимальному пути, формирует
            таблицу прямого маршрута передачи пакетов от источника к адресату.
            <br></br>Недостаток: память для хранения таблиц в устройствах, +
            формирует большой трафик.
          </p>

          <br></br>
          <p>
            <a name="bi6" style={{ color: "red" }}>
              1.Способы урегулирования коллизий на сетях связи и их
              использование при синхронном и асинхронном режимах передачи
              данных. 2.Технология WI-FI стандарта IEEE 802.11n.
            </a>
            <br></br>
            1.
            <br></br>
            Способ 1 - с потерями. заявка на занятие сетевых ресурсов получает
            отказ и не сохраняется в центре коммутации. Возникают паузы,
            снижается использование полосы пропускания линии связи.
            <br></br>
            Способ 2 - с ожиданием. заявка не покидает сетевой центр, а
            сохраняется в буфере и удовлетворяется по мере освобождения сетевых
            ресурсов. Можно устанавливать приоритеты обслуживания.
            <br></br>
            Способ 3 - Ограниченное время ожидания - заявка теряется при
            превышении времени пребывания в буфере. + ограниченное число мест
            ожидания. потери если места заняты.
            <br></br>
            2.
            <br></br>
            Используется для создания локальных сетей. Это последний из принятых
            стандартов. Максимальная скорость 600м/бит благодаря удвоению ширины
            канала с 20 до 40 МГц и реализации технологии MIMO со множеством
            антенн.
          </p>

          <br></br>
          <p>
            <a name="bi7" style={{ color: "red" }}>
              1. Коммутация каналов. Способы реализации. Основы построения
              ручных телефонных станций. 2.Технология Bluetooth. Разделение
              каналов. Образование piconet и scatternet.
            </a>
            <br></br>
            1.
            <br></br>
            Коммутация каналов предполагает закрепление за пользователями всех
            общесетевых ресурсов, необходимых для информационного
            взаимодействия, на все время взаимодействия. Соединение
            устанавливается и разрушается по инициативе пользователей и
            обеспечивает передачу данных в реальном масштабе времени.
            <br></br>В электромеханических сетях коммутация каналов реализуется
            в форме соединения электрических цепей для переноса энергии
            сигналов. <br></br>В цифровых сетях – в форме переноса данных об
            энергии сигнала в дискретные моменты во временных слотах.
            <br></br>
            Абонентские линии подключены к гнездам многократного поля
            коммутаторов, телефонистки при помощи токопроводящих шнуров со
            штепселями на концах соединяют гнезда для передачи сигналов
            электросвязи в форме электрического тока, модулированного телефонами
            пользователей.
            <br></br>
            2.
            <br></br>
            Используется для создания недорогих персональных сетей (PAN) и
            обеспечивает энергоэффективный обмен данными между малогабаритными
            электронными устройствами. Разделение каналов на 1,2,3 МБИТ/с.
            <br></br>
            piconet - образуется главным устройством и подключенным к нему до 7
            подчиненных, которые делят общий канал. Алгоритмы множественного
            доступа управляют расписанием доступа подчиненных устройств к
            каналу.<br></br>
            scatternet - комбинирует несколько piconet. Главное устройство в
            одной сети может быть подчиненным в другой сети.
          </p>

          <br></br>
          <p>
            <a name="bi8" style={{ color: "red" }}>
              1. Особенности технологий коммутаций сообщений. Принципы
              построения службы коротких сообщений. 2.Технология ZigBee.
              Уровневая модель. Уровни DLS, NWK, APS.
            </a>
            <br></br>
            1.
            <br></br>
            не предполагает закрепления за пользователем канальных ресурсов,
            поскольку информационная емкость сообщений меньше, чем емкость
            каналов связи. <br></br>
            Пришедшее на центр коммутации сообщение должно сопровождаться
            адресной информацией и сначала сохраняется в специальной памяти, и
            лишь затем, после определения направления связи, ставится в очередь.
            Передача осуществляется после того, как будет сформирована группа из
            нескольких сообщений, совместная емкость которых соответствует
            емкости каналов связи.
            <br></br>Передача сообщения, таким образом, осуществляется не в ре-
            альном масштабе времени, а по мере поступления других сообщений и
            освобождения каналов.
            <br></br>Технология коммутации сообщений была разработана для
            почтовых и телеграфных сетей.
            <br></br>
            (короткие) SMS-сообщение, используя те же сетевые ресурсы, что и
            голосовой сигнал, по каналам связи и центры коммутации доставляется
            до центра обработки SMS-сообщений, а затем в обратном направлении до
            терминала получателя.
            <br></br>
            2.
            <br></br>
            ZigBee - открытый стандарт для недорогих и маломощных
            самоорганизующихся и самовосстанавливающихся беспроводных сетей с
            ячеистой топологией и с небольшим радиусом действия. (до 75 метров).
            <img src={img3} />
            Уровень канала передачи данных - формирование и контроль пакетов
            данных, управление потоком данных.
            <br></br>
            Сетевой уровень - безопасность при передаче данных,
            регистрация/исключение устройства из сети, обнаружение в сети
            соседних узлов и запоминание необходимой информации о них, прокладку
            маршрута между устройствами сети и определение маршрута доставки
            кадра к месту назначения, поддержка различных топологий.
            <br></br>
            Уровень поддержки приложений - безопасность устройства, трансляция
            сообщений приложениям, организация сервисов устройств.
          </p>

          <br></br>
          <p>
            <a name="bi9" style={{ color: "red" }}>
              1. Общая характеристика технологий М2М. Организация и статистика
              соединений М2М. 2.Экосистема и бизнес-модели интернета вещей.
            </a>
            <br></br>
            1.
            <br></br>
            Технология межмашинного взаимодействия. Она использует сети, как
            правило, сотовой связи для обмена данными между вещами в симплексном
            или дуплексном режиме не образуя сенсорные сети.(GPS-трекеры,
            счетчики воды, мониторы здоровья - пульс) в 2019 почти треть
            соединений между умными вещами будет осуществляться через глобальные
            сети с низким энергопотреблением. Они потребляют в 300 раз меньше
            энергии, а стоимость владения в 10 раз меньше.
            <br></br>
            2.
            <br></br>
            Экосистема интернета вещей - это среда, обеспечивающая формирование,
            распространение и развитие соответствующих услуг за счет
            взаимодействия участников экономической деятельности, как правило, в
            реальном масштабе времени.
            <img src={img4} />
          </p>

          <br></br>
          <p>
            <a name="bi10" style={{ color: "red" }}>
              1. Радиочастотная идентификация. Области применения. Базовые
              технологии. Преимущества и недостатки. 2. Эталонная модель
              интернета вещей (МСЭ-Т Y.2060). Характеристика уровней.
            </a>
            <br></br>
            1.
            <br></br>
            RFID - технология радиочастотной идентификации обьектов использует
            RFID метку(транспондер, приемо-передатчик, RFID-систему, RFID-тэг)
            для дистанционного считывания и записи данных при помощи
            радиосигналов. Является внешним устройством в отличии от помечаемых
            предметов и подвержены кибер-атакам.
            <br></br>
            Области применения: логистика, доставка, отслеживание животных,
            идентификация беспилотных средств, системы контроля и управление
            доступом.
            <br></br>
            Преимущества: штрик-код, магнитная полоса, биометрика - ускоряют
            процесс идентификации, не требуют специального расположения маркера,
            надежны, долговечны.
            <br></br>
            Недостатки: зависимость от электромагнитных помех, взаимные коллизии
            в группе соседних меток, более высокая стоимость метки.
            <br></br>
            2.
            <br></br>
            <img src={img5} />
            УРОВЕНЬ ПРИЛОЖЕНИЙ - включает все приложения, при помощи которых
            абоненты интернета вещей получают желаемые услуги и взаимодействуют
            с устройствами. УРОВЕНЬ ПОДДЕРЖКИ - предоставляет
            возможности(обработка и хранение данных, управление БД),
            специализированные возможности - конкретные приложения. УРОВЕНЬ СЕТИ
            - взаимодействуют устройства и шлюзы, предоставляющие возможности
            организации сетевых соединений и доставки данных между устройствами.
            УРОВЕНЬ УСТРОЙСТВ - описывает возможности устройств и шлюзов.
            Устройства - обмен информацией. Шлюзы - поддержка интерфейсов
            проводных и беспроводных технологий. Возможности управления -
            неисправностями, конфигурацией, учетом, производительностью и
            безопасностью. Возможность обеспечения безопасности - авторизация,
            аутентификация, конфиденциальность, целостность данных, антивирусные
            средства.
        
          </p>

          <br></br>
          <p>
            <a name="bi11" style={{ color: "red" }}>
              1. Классификация RFID меток. Пассивные метки с чипом. Активные
              метки с чипом. Метки без чипа. 2.Пространственные, временные и
              энергетические характеристики инфокоммуникаций.
            </a>
            <br></br>
            1.
            <br></br>
            По исполнению - кремневые, на поверхностных акустических волнах.
            <br></br>
            По способу хранения данных - с чипом (кремниевая технология) - без
            чипа(на ПАВ)
            <br></br>
            По электропитанию - активные (с излучающим контуром) - полуактивные
            (питание для чипа) - пассивные(резонирующие)
            <br></br>
            По способу использования - только считывание идентификатора -
            однократная запись данных в память и многократное считывание -
            многократная запись/считывание.
            <br></br>
            По частоте - низкочастотный - среднечастотный - высокочастотный.
            <br></br>
            ПАССИВНЫЕ МЕТКИ - получают энергию для функционирования от
            электрического тока, индуцируемого в антенне электромагнитным
            сигналом считывателя. Обработку обеспечивает кремниевый КМОМ-чип.
            <br></br>
            АКТИВНАЯ МЕТКА - собственный источник питания позволяет активным
            меткам генерировать выходной сигнал большого уровня для увеличения
            дальности уверенного считывания до сотен метров и использование
            метки в воде, тело человека.
            <br></br>
            Без чипа -  Прямой/обратный пьезоэлекрический эффект.
            <br></br>
            2.
            <br></br>
            Пространственные - измеряются в единицах длины и расстояния,
            определяют зону охвата, масштаб сети, описывают распределение в
            пространстве пользователей и данных.
            <br></br>
            Временные - время доставки данных, от начала до конца передачи.
            <br></br>
            Энергетические - обьем энергии на единицу инфоуслуг, обьем выброса
            углерода в перерасчете на один сервер или на группу пользователей,
            энергопотребление на 1 кв. м. площади технических помещений.
          </p>

          <br></br>
          <p>
            <a name="bi12" style={{ color: "red" }}>
              1. Стандарты EPC Global. Функциональные группы меток. Структура
              памяти метки стандарта Gen2. 2. Протокол множественного доступа
              CSMA-CA.
            </a>
            <br></br>
            1.
            <br></br>
            Electronic Product Code - Global - ориентирован на создание таких стандартов, которые позволят на практике идентифицировать любой обьект в цели поставок товаров компаний всего мира.
            <br></br>
            5 функциональных групп:
            <br></br>
            Класс 0: пассивная метка - идентификация обьекта - содержит только  электронный код продукта
            <br></br>
            Класс 1: пассивная метка - Дополнительные функциональные возможности (например, перезапись ид. кода EPC)
            <br></br>
            Класс 2: полупассивная метка - все метки, использующий дополнительно источник питания, но основной источник питания - считыватель(его излучаемая энергия)
            <br></br>
            Класс 3: активная метка - встроенный источник питания - обеспечивает энергией независимо от считывателя
            <br></br>
            Класс 4: активные RFID метки - содержат встроенный источник питания + набор определенной логики, позволяющий метке обмениваться данными с такой же меткой или обычным считывателем.  
            <br></br>
            2.
            <br></br>
            1) Reserved memory - kill пароль (метка убивается) - access пароль (без знания доступ невозможен)
            <br></br>
            2) Electronic Product Code - хранит уникальный код, который позволяет однозначно идентифицировать один обьект, помеченный меткой, от любого другого обьекта. Не защищен от записи, заполняется пользователем.
            <br></br>
            3) Transponder ID - хранит идентификаторы производителя метки, модели используемого чипа и самой метки - защита от подделки. Образуют уникальный код, защищенный от перезаписи.
            <br></br>
            4) User memory - необязательный банк - имеет размер от 32 до 512 бит и предназначен для хранения любой инфы юзера. 
            <br></br>

          </p>

          <br></br>
          <p>
            <a name="bi13" style={{ color: "red" }}>
             1. Физические основы построения меток без чипа. RFID метка на ПАВ с отражающими элементами. 
             2. Основные понятия технологий маршрутизации. Классификация протоколов маршрутизации сенсорных сетей.
            </a>
            <br></br>
            1.
            <br></br>
            Без чипа -  Прямой/обратный пьезоэлекрический эффект. Пьезоэлектрик помогает преобразовывать механическую энергию в электрическую и наоборот.
            <br></br>
            Поверхностно-акустические-волны (ПАВ) - упругие волны, распроняются вдоль поверхности твердого тела. В пьезоэлектрике их можно инициировать электрическим импульсом.
            <br></br>
            RFID метка на ПАВ с отражающими элементами - не содержит чипа. Дипольная антенна, подключенная к встречно-штыревому преобразователю, принимает сигнал опроса от считывателя и излучает ответный сигнал метки.
            <br></br>
            2.
            <br></br>
            МАРШРУТ в сети связи – это последовательность сетевых центров, через которые передаются пакеты
от источника информации к адресату. 
<br></br>Маршрутизация – это процесс выбора наилучшего маршрута из нескольких альтернативных по
какому-либо критерию.
<br></br>Маршрутизатор – это устройство, осуществляющее процедуру выбора. Для принятия решения ему
надо располагать информацией об адресате и о текущем состоянии сети.
<br></br>ТАБЛИЦА МАРШРУТИЗАЦИИ – набор данных о состоянии связей между сетевыми элементами,
доступных маршрутизатору, дающий представление о наиболее эффективных маршрутах передачи
пакетов.<br></br>
АЛГОРИТМ МАРШРУТИЗАЦИИ – алгоритм формирования таблицы маршрутизации и выбора
маршрута передачи пакета.
<br></br>
Маршрутизация бывает:<br></br>
- ФИКСИРОВАННОЙ, если таблица маршрутизации не изменяется в реальном времени;<br></br>
- АДАПТИВНОЙ, если таблица маршрутизации формируется маршрутизаторами в процессе обмена
<br></br>
Критерии выбора маршрута:<br></br>
- ПО РАССТОЯНИЮ – чем меньше ретрансляций пакетов (хопов), тем лучше;<br></br>
- ПО ДОСТОВЕРНОСТИ ДОСТАВКИ – чем меньше вероятность ошибки, тем лучше;<br></br>
- ПО ВРЕМЕНИ ЗАДЕРЖКИ – чем выше вероятность своевременной доставки, тем лучше;<br></br>
- ПО РАСХОДУ ЭНЕРГИИ – чем точнее баланс энергии в узлах сети, тем лучше;<br></br>
- ПО КОМПЛЕКСНОМУ КРИТЕРИЮ – учитываются несколько параметров и др.<br></br>

По типу используемых данных:<br></br>
- ТОПОЛОГИЧЕСКИЕ протоколы используют данные о текущей сетевой топологии;<br></br>
- ГЕОГРАФИЧЕСКИЕ протоколы основаны на геолокации.<br></br>
По принципу работы:<br></br>
- ПРОАКТИВНЫЕ или табличные протоколы основаны на периодической рассылке по сети служебных сообщений с информацией о текущей топологии, позволяющей каждому
узлу сформировать таблицу маршрутизации;<br></br>
- РЕАКТИВНЫЕ алгоритмы предполагают составление маршрута от узла-источника к адресату после появления данных для передачи. Для этого источник рассылает широковещательное сообщение, которое должно дойти до адресата. В ответ адресат высылает сообщение, из которого источник узнает необходимый маршрут и записывает его в свою
таблицу маршрутизации. Разрушение маршрута требует повторения процедуры;<br></br>
- ГИБРИДНЫЕ алгоритмы разбивают сеть на множество подсетей, внутри которых функционирует проактивный протокол, а взаимодействие между подсетями осуществляется
реактивными методами.<br></br>
По количеству выбранных маршрутов:<br></br>
- ОДНОМАРШРУТНЫЕ строят единственный маршрут по заданному критерию;<br></br>
- МНОГОМАРШРУТНЫЕ строят несколько маршрутов, способных при необходимости заменить друг друга при передаче данных.<br></br>

По архитектуре:<br></br>
- ОДНОУРОВНЕВЫЕ, работающие только на сетевом уровне ЭМВОС;<br></br>
- МНОГОУРОВНЕВЫЕ, учитывающие данные других уровней и, соответственно, множество разнообразных параметров маршрута.<br></br>
          </p>

          <br></br>
          <p>
            <a name="bi14" style={{ color: "red" }}>
              1. Случайные алгоритмы антиколлизии. Алгоритм АЛОХА и его модификации. 2.Стандарт IEEE 802.15.4. Физический уровень.
            </a>
            <br></br>
            1.
            <br></br>
            Многие случайные алгоритмы так или иначе являются модификацией алгоритма АЛОХА, который предполагает, что метки способны: зафиксировать факт коллизии и повторно выдать данные через некоторое случайное время задержки.
            Процедуру могут выполнять только метки с чипом. Антиколлизиионный алгоритм синхронная АЛОХА, в соответствии с которым передача данных осуществляется метками в начале временных интервалов, задаваемых считывателем, а в случае коллизии ими вычисляется случайное число интервалов задержки повторной передачи.  
            <br></br>
            2.
            <br></br>
            Стандарт описывает физический уровень и подуровень управления доступом к среде передачи (MAC) стека протоколов многих беспроводных сетей.
            <br></br>
            Число каналов - 16, ширина канала - 5МГц, макс скорость - 250кбит, дальность - 10-100 метров, 2 типа устройств: RFD(ограниченный набор функций) - FFD(полнофункциональное устр.).
            <br></br>
            а) равный равному (peer-to-peer), б) звезда 
            <br></br>
            PAN координатор - все устройства взаимодействуют только через него (звезда).
           
          </p>

          <br></br>
          <p>
            <a name="bi15" style={{ color: "red" }}>
              1.Алгоритм антиколлизии стандарта Gen2. 2. Аналоговая модуляция по амплитуде и фазе. Векторные диаграммы манипуляций BPSK и OQPSK.
            </a>
            <br></br>
            1.
            <br></br>
            Выбор метки из зоны опроса осуществляется без использования их идентификаторов. Предварительно считыватель тем или иным образом выбирает число Q.
            <br></br>
            Шаг 1. Считыватель просит все метки из зоны опроса сгенерировать два случайных числа в диапазонах, которые задает Q: 
            <br></br>

Шаг 2. Считыватель просит ответить ему только те метки, которые выбрали первое
число q1=0. Возможны 3 случая:
- если ответило несколько меток, то считыватель увеличивает значение Q, тем самым
уменьшая вероятность генерации одинаковых чисел разными метками, и возвращается к
шагу 1;
- если нет ответа ни от одной из меток, считыватель уменьшает значение Q, тем самым
увеличивая вероятность генерации числа 0 одной из меток, и возвращается к шагу 1;
- если отвечает одна метка, то переходит к шагу 3.  
<br></br>
Шаг 3. Считыватель запрашивает у ответившей (выбранной) метки второе случайное
число q2 и далее использует его как временный идентификатор метки.
<br></br>
Шаг 4. Считыватель просит оставшиеся метки вычесть 1 из первого случайного числа q1
и переходит к шагу 2.
<br></br>
И так до тех пор, пока не будут определены все метки.
Алгоритм позволяет по сравнению с алгоритмом АЛОХА повысить:
<br></br>
- скорость поиска меток (до 1500 меток/сек) и записи в них данных (до 16 меток/сек);
<br></br>- кибербезопасность RFID системы, т.к. не требуется передавать через эфир уникальные
идентификаторы меток.
            <br></br>
            2.
            <br></br>
            совмещает в себе аналоговые амплитудную и фазовую модуляцию и
            способна передавать несколько бит одним символом.
            <img src={img6} />
            <br></br>
            </p>

          <br></br>
          <p>
            <a name="bi16" style={{ color: "red" }}>
             1. Детерминированные и пространственные алгоритмы антиколлизии. 2.Основы частотной модуляции FSK (frequency shift key).
            </a>
            <br></br>
            1.
            <br></br>
            Детерминированный -- -- Бинарный алгоритм, а не перебор случайных чисел. 
            <br></br>
            Шаг 1: Предположим, что первая цифра метки - 0, потом отсеиваем лишнее. Шаг 2: вторая цифра 0, и тд.
            <br></br>Метка должна содержать чип и взаимодействовать со считывателем по определенному протоколу.
            <br></br>Алгоритм не работает, если в зоне опроса появляются новые метки. 
            <br></br>Пространственный -- -- выбор такого взаимного положения считывателя и группы меток в пространстве, которое позволит направить импульс опроса только к одной определенной метке и не инициировать считывание с других меток этой группы.
            Задача усложняется добавлением новых меток и уменьшения расстояния между ними. <br></br>обычно работает на малом расстоянии и в статическом положении и кол-ве меток.
            <br></br>
            2.
            <br></br>


МОДУЛЯЦИЯ – это операция изменения параметров электромагнитного колебания (частоты,
амплитуды и (или) фазы) в соответствии с передаваемым сообщением. В результате модуляции образуется сигнал, который переносит информацию. Теория Фурье позволяет
разложить сигнал на ряд синусоид (гармоник), отличающихся своими параметрами.
<br></br>
СПЕКТР СИГНАЛА – это набор таких гармоник.
<br></br>
МАНИПУЛЯЦИЯ – это модуляция дискретного сигнала.
<br></br>
При модуляции FSK (frequency shift key – частотная двоичная модуляция) биты исходного цифрового сообщения кодируются частотой. Для этого два генератора формируют
колебания S0(t) и S1(t) на различных частотах. Электронный ключ, управляемый цифровым сигналом, при передаче логической «1» подключает на выход один, а при передаче
логического «0» – другой сигнал. Таким образом, частота выходного сигнала b(t) манипулируется битовой последовательностью. 
<br></br>
Начальные фазы генераторов здесь не связаны друг с другом (некогерентны), т.е. мы имеем частотную модуляцию с разрывной фазой, что увеличивает спектр b(t).
Кроме того, начальные фазы частот некогерентны по отношению к модулирующему сигналу b(t), поэтому такую модуляцию называют некогерентной FSK.





          </p>

          <br></br>
          <p>
            <a name="bi17" style={{ color: "red" }}>
              1. Сравнение инфраструктурных и всепроникающих сенсорных сетей. 2. Протоколы маршрутизации в сенсорных сетях Hierarchical(иерархический) PEGASIS и BCDCP (Base-Station Controlled Dynamic Clustering Protocol).
            </a>
            <br></br>
             1.
            <br></br>
            Принципы построения инфраструктурных (фиксированных) сетей
были разработаны в XX веке. В самом общем плане они состоят из: <br></br>
- первичной сети типовых каналов; <br></br>
- вторичной сети коммутационных узлов и станций, <br></br>
- интеллектуальной сети информационного обслуживания.
<br></br>
ЦЕЛЬЮ РАЗВИТИЯ СЕТЕЙ СВЯЗИ, ПОСТРОЕННЫХ В
СООТВЕТСТВИИ С ЭТИМИ ПРИНЦИПАМИ, БЫЛИ:
<br></br>
- В ОБЛАСТИ ПРОСТРАНСТВЕННЫХ ХАРАКТЕРИСТИК - рост числа
пользователей за счет увеличения зоны охвата иерархически организованными и стационарно располагаемыми
станциями и узлами первичной и вторичной сетей;
<br></br>
- В ОБЛАСТИ ВРЕМЕННЫХ ХАРАКТЕРИСТИК – увеличение
пропускной способности первичной сети и скоростей
обработки служебных данных во вторичной сети для
уменьшения задержек и блокировок при передаче данных;
<br></br>
- В ОБЛАСТИ ЭНЕРГЕТИЧЕСКИХ ХАРАКТЕРИСТИК – обеспечение
бесперебойного питания за счет резервирования систем
электроснабжения и аккумуляции энергии непосредственно
в станциях и узлах первичной и вторичной сетей связи.
Колбанёв М.О. Всепроникающие сенсорные сети.
            <br></br>
             2.
             <br></br>
             Возможность создания интернета вещей обеспечивают технологии сенсорных сетей.
             <br></br>
СЕНСОРНАЯ СЕТЬ – это множество связанных друг с другом и с
облаком умных вещей (сенсорных устройств), обеспечивающих
измерение физических параметров окружающей среды.
<br></br>
Пространство, охватываемое сенсорами, представляет собой самостоятельный объект исследования в той или иной предметной
области и называется СЕНСОРНЫМ ПОЛЕМ.
<br></br>
Таким полем может быть территория населенного пункта, ферма в
сельском хозяйстве, тело или часть тела человека в медицине,
нефтяная платформа в добывающей промышленности и т.п.
<br></br>
ХАРАКТЕРНЫМИ ОСОБЕННОСТЯМИ СЕНСОРНЫХ ПОЛЕЙ ЯВЛЯЮТСЯ:
<br></br>
- широкий разброс геометрический размеров от долей метров до километров, и способность к масштабированию;
<br></br>
- автономность работы каждого устройства, которое имеет собственное питание и функционирует по собственному алгоритму;
<br></br>
- большое разнообразие сенсоров, осуществляющих комплексные измерения самых разных параметров пространства,
<br></br>
- способность к самоорганизации при случайном изменении количества и места расположения взаимодействующих сенсоров из-за их отказов, перехода в режим сна, мобильности и т.п.; <br></br>
- использование беспроводных технологий передачи сигналов; <br></br>
- низкое энергопотребление из-за невозможности частой замены или подзарядки аккумуляторов в процессе работы; <br></br>
- широкий диапазон скоростей передачи данных и допустимого времени реакции на
происходящие события и др.  <br></br>
2.
<br></br>
Модификацией PEGASIS является протокол Hierarchical PEGASIS.
Здесь строится несколько цепей ограниченной длины, которые объединяются в
иерархию. На втором уровне цепи (или несколько цепей) образуют головные узлы
цепей нижнего уровня и т.д. Координатор получает данные от головного узла цепи
самого верхнего уровня. Агрегация данных осуществляется последовательно, начиная с
цепей нижнего уровня. Преимущество данного подхода заключается в возможности
независимого сбора данных в цепях одного уровня иерархии, что
Позволяет сократить продолжительность доставки данных.
<br></br>Модификацией LEACH является протокол Base-Station Controlled
Dynamic Clustering Protocol (BCDCP), который на втором уровне
создает кластеры или цепи из головных узлов первого уровня.

          </p>

          <br></br>
          <p>
            <a name="bi18" style={{ color: "red" }}>
             1. Пространственные характеристики всепроникающих сенсорных сетей. 2.Открытые полосы частот согласно решениям ГКРЧ. Характеристика диапазонов %%%%%%%%__+++
            </a>
            <br></br>
            1.
            <br></br>
           Размер сенсорного поля (площадь, обьем) - основная. Может вмещать тысячи вещей, нановещей, менять линейные размеры, быть двумерным и трехмерным.
            <br></br>
        
           Плотность поля - среднее число точек, находящихся на единице площади (обьема) - плотные и сверхплотные поля. может быть равномерным - плотность постоянна.
        <br></br>
        2.
        <br></br>
        бред собачий!!!
          </p>
        
          <br></br>
          <p>
            <a name="bi19" style={{ color: "red" }}>
              1.Временные характеристики всепроникающих сенсорных сетей. 2.Классификация устройств интернета вещей. Взаимосвязь и взаимодействие устройств и физических вещей.
            </a>
            <br></br>
             1.
            <br></br>
            Требования к времени доставки данных всепроникающими сенсорными сетями может варьироваться в широких пределах.
            В рекомендациях МСЭ-Т для сетей NGN определена допустимая задержка передачи пакета не выше
100 мс. Для больших расстояний допускается
задержка в 400 мс, несмотря на ухудшение качества
передачи речи и видео.
            <br></br>


Требования к задержкам в интернете вещей полностью зависят
от вида физических процессов, протекающих в предметной области и фиксируемых датчиками сенсорного поля. Например,
опрос датчиков, измеряющих температуру почвы, может
производиться один раз в несколько дней, а допустимое время
их реакции на сигнал опроса может измеряться секундами.
<br></br>

Совсем другие требования к задержкам предъявляются в сетях, измеряющих показатели
здоровья человека. Только уменьшение задержки до 10 мс позволяет медицинским приложениям изменить традиционную модель «пациент – доктор». Носимые умные вещи могут как контролировать ход лечения, оценивать влияние медикаментов, фиксировать изменение физических
показателей, ход реабилитации пациентов, так и воздействовать на
состояние человека при помощи медицинских актуаторов.
            <br></br>
             2. <br></br>

ВЕЩЬ (Thing): предмет физического мира или информационного мира,
который может быть идентифицирован и интегрирован в сети связи.<br></br>

УСТРОЙСТВО (Device): элемент оборудования, который обладает обязательными возможностями связи и дополнительными возможностями
измерения, срабатывания, а также ввода, хранения и обработки данных.<br></br>

УСТРОЙСТВО ПЕРЕНОСА ДАННЫХ (Data-carrying Device): подключается к
физической вещи и непрямым образом соединяет эту физическую
вещь с сетями связи. Например, активные метки RFID.<br></br>

УСТРОЙСТВО СБОРА ДАННЫХ
(Data-capturing Device): считывающее/записывающее
устройство, имеющее возможность взаимодействия с
физическими вещами непрямым образом с помощью
устройств переноса данных
или напрямую с помощью
носителей данных, подключенных к физическим вещам.<br></br>

НОСИТЕЛЬ ДАННЫХ (Data Carrier): безбатарейный объект переноса данных, подключенный к физической вещи и имеющий
возможность предоставлять информацию пригодному для
этого устройству сбора данных (штрих-коды и QR-коды).<br></br>
Взаимосвязь=================<br></br>
Устройство – это оборудование
интернета вещей с
возможностями связи, и (или)
измерения/исполнения,
и(или) ввода, хранения,
обработки данных.
Вещь – предмет
физического мира
Сети связи передают собранные устройствами данные приложениям и другим устройствам, а также передают инструкции от приложений к устройствам. Инфраструктура сети в
интернете вещей может быть сформирована с использованием существующих сетей,
например традиционных сетей на базе протокола TCP/IP, и/или развивающихся сетей,
таких как сети последующих поколений.
Примерами приложений интернета вещей могут служить интеллектуальные транспортные системы, умные электросети, электронное здравоохранение или умный дом. Эти
приложения могут использовать собственное проприетарное ПО или основываться на
типовых возможностях аутентификации, управления устройствами, биллинга и т.п.
          </p>

          <br></br>
          <p>
            <a name="bi20" style={{ color: "red" }}>
             1. Энергетические характеристики всепроникающих сенсорных сетей. 2. Общий принцип построения многоуровневых моделей при стандартизации взаимодействия открытых систем. Стандарты IEEE 802.x.
            </a>
            <br></br>
             1.
            <br></br>
            
Энергосбережение обеспечивается АППАРАТНО-ПРОГРАММНЫМИ и СИСТЕМНЫМИ МЕТОДАМИ.      
            <br></br>
            Первые связаны с технологиями производства устройств. Необходимо ориентироваться
на современной техпроцесс и надежность при выборе чипов и др. компонент, стремиться
к уменьшению напряжения питания, применять эффективные схемные решения, использовать системное программное обеспечение, соответствующее особенностям сенсорных
узлов, разрабатывать эффективные алгоритмы предварительной обработки данных,
стремиться к увеличению периода сна умных вещей и т.д.  <br></br>
Цикл работы умной вещи включает этапы сбора, обработки, приема и передачи данных
и сон. Анализ типичного профиля энергопотребления показывает:  <br></br>
- главным потребителем энергии
является приемопередатчик;  <br></br>
- энергопотребление на этапах обработки данных в млн. раз меньше в пересчете на 1 бит;  <br></br>
- надо стремиться к предварительной обработке для сокращения
объема пересылаемых данных,  <br></br>

- основную часть жизни вещь должна спать.  <br></br>2.
<br></br>
<img src={img7} />
<img src={img8} />
          </p>

          <br></br>
          <p>
            <a name="bi21" style={{ color: "red" }}>
              1.Корреляционные алгоритмы антиколлизии меток без чипа. 2.Связность сенсорных сетей.
            </a>
            <br></br>
           1.
            <br></br>
           


КОРРЕЛЯЦИОННЫЕ СВОЙСТВА МЕТОК НА ПАВ
<br></br>
Одно из свойств меток на ПАВ заключается в следующем. Если сигнал опроса построить
как зеркальную последовательность кода метки, образованного рефлекторами, то за
счет корреляции отраженный импульс метки, будет импульсом значительной амплитуды. Уменьшение ВКФ опросной последовательности с кодом метки приводит к уменьшению амплитуды отклика.
<br></br>
Это свойство дает возможность создать RFID систему
на маркерах без чипа, выбрав такие коды для меток,
которые попарно имеют достаточно маленькую ВКФ.
<br></br>
Наилучший вариант системы кодов должен состоять
только из ортогональных кодов, то есть таких, для
которых ВКФ любой пары кодов равна UAB = 0 .
<br></br>
Ортогональные коды можно получить при помощи
ФУНКЦИИ УОЛША, образуемых МАТРИЦЕЙ АДАМАРА. Это
группа из 2n функций, которая формируется
рекуррентно по следующей общей схеме.
            <br></br>
           2.
            <br></br>
          
СВЯЗНОСТЬ – это свойство ВСС, которое характеризует ее способность передавать данные
между сетевыми элементами в пределах границ сенсорного поля в реальном масштабе
времени при определенном уровне заряда батарей сенсорных устройств.

<br></br>

Связность ВСС зависит и от топологии, и от трафика, и от надежности устройств, и от
емкости аккумуляторов автономного электропитания.

<br></br>
К нарушению связности могут привести:    <br></br>
– РАЗРЫВЫ СОЕДИНЕНИЙ в моменты окончания запаса
энергии батареи одного из сетевых элементов;    <br></br>
– ОГРАНИЧЕННАЯ МОЩНОСТЬ СИГНАЛА на передающей антенне при больших расстояниях между сетевыми элементами, когда невозможно обеспечить устойчивый
радиоприем данных на стороне адресата.
          </p>
          <br></br>
          <p>
            <a name="bi22" style={{ color: "red" }}>
             1. Мультиплексирование по длине волны. 2.Интернет вещей. Основные определения МСЭ-Т. Вещи и устройства.
            </a>
            <br></br>
            1.
          
            <br></br>
            это технология, позволяющая одновременно передавать несколько
            информационных каналов по од- ному оптическому волокну на разных
            длинах волн. Ее можно рассматривать как особый вид частот- ного
            мультиплексирования на частотах выше 100 - 200 ТГц. В порядке
            уменьшения частотного раз- носа каналов различают грубые (CWDM),
            плотные (DWDM) и высокоплотные (HDWDM) сиcтемы.
            <br></br>
            Длина волны для передачи сигнала выбирается исходя из ОКОН
            ПРОЗРАЧНОСТИ – диапазонов длин волн оптического излуче- ния, в
            котором имеет место меньшее, по сравнению с другими диапазонами,
            затухание излучения в оптическом волокне. Длину волны 850 нм
            используют для многомодового, 1310 нм – и для многомодового, и для
            одномодового, а 1550 нм – только для одномодового оптоволокна.
            <br></br>Возможность существования устройств WDM основан на свойстве
            световодов одновременно пропускать множество сигналов, которые,
            распространяясь, не взаимодействуют друг с другом. Это дает
            возможность ввести в волоконный световод одновременно излучение от
            нескольких источников, работающих на разных длинах волн λ1,…, λn , а
            на приемном конце с помощью оптических фильтров разде- лить эти
            сигналы.
            <br></br>
            ВОЛС – это система, которая содержит активные (модуляторы,
            мультиплексор/демультиплексор, регенераторы (для восстановления
            формы оптических импульсов), усилители мощности сигнала и др.) и
            пассивные устройства (кабель, оптические муфты и кросс и др.).
            <br></br>2.  <br></br>

Интернет вещей – это совокупность взаимосвязанных через сети объектов двух типов:
- физически реализованных УМНЫХ ВЕЩЕЙ, которые способны взаимодействовать по
эфирной сети между собой и с окружающей их средой без участия человека, и
- ЦИФРОВЫХ ОБРАЗОВ ЭТИХ ВЕЩЕЙ, которые размещены в вычислительных облаках.<br></br>
ИНТЕРНЕТ ВЕЩЕЙ ОБЪЕДИНЯЕТ РЕАЛЬНЫЙ И ВИРТУАЛЬНЫЙ МИРЫ.<br></br>

ОПРЕДЕЛЕНИЕ МСЭ: Интернет вещей  – это глобальная инфраструктура информационного общества,
обеспечивающая передовые услуги за счет организации связи между вещами (физическими или виртуальными)
на основе существующих и развивающихся совместимых информационных и коммуникационных технологий».
<br></br>

Под ВЕЩАМИ  понимается физический или виртуальный объект, который имеет
идентификатор и подключен к сети. Вещь, которая не имеет никаких возможностей
кроме коммуникации с другими вещами, называется УСТРОЙСТВОМ.
          </p>
          <br></br>
          <p>
            <a name="bi23" style={{ color: "red" }}>
            1. Особенности технологии коммутации пакетов. Дейтаграммный режим. Режим виртуального соединения. 2.Эталонная модель всемирного форума интернета вещей IWF. Предназначение модели. Характеристика уровней.            </a>
            <br></br>
            1.
            <br></br>
            ТЕХНОЛОГИЯ КОММУТАЦИИ ПАКЕТОВ. 
Если объем сообщений имеет существенный разброс и может быть как больше, так и меньше объема каналов связи, то можно разделить каждое сообщение на
относительно одинаковые блоки (пакеты) и передавать эти блоки по каналам связи независимо друг
от друга. Алгоритмы коммутации должны снабжать каждый пакет дополнительными служебными
полями для однозначной идентификации пакета как части определенного сообщения. Коммутация
пакетов предполагает сохранение сообщений и обеспечивает статистическое уплотнение каналов.
            <br></br>
            Режим с установлением (виртуального) соединения – все пакеты
сообщения передаются по одному и тому же маршруту от узла
источника к узлу получателю. Маршрутизаторы, образующие маршрут,
определяют принадлежность пакетов по специальному полю в их
формате;<br></br>
Режим без установления соединения (дейтаграммный режим) – каждый
следующий пакет одного сообщения может передаваться по сети по
новому маршруту, выбор которого не связан с маршрутами других
пакетов.
            <br></br>
            2.
            <br></br>

Модель Всемирного форума интернета вещей нацелена на разработку: приложений, промежуточного ПО и функций поддержки для корпоративного интернета вещей. Предназначение модели заключается в следующем:
Помогает разбить IoT на более простые части. Вырабатывает общие понятия и терминологию.
            <br></br>
            7. Сотрудничество <br></br>
6. Приложения <br></br>
5. Абстракция данных <br></br>
4. Накопление данных <br></br>
3. Туманные
вычисления <br></br>
2. Сети связи <br></br>
1. Физические устройства
и контроллеры <br></br>
УРОВЕНЬ 7 предназначен для средств взаимодействия с людьми. Он может включать
приложения и средства обмена данными и/или управляющей информацией по
интернету или корпоративной сети. <br></br>
НА УРОВЕНЕ 6 находятся приложения, которые могут использовать данные и управлять
устройствами. Модель IWF не определяет приложения как формальный объект. <br></br>
УРОВЕНЬ 5 агрегирует данные разных источников и форматирует их в соответствии с требованием приложений, обеспечивает управляемый и эффективный доступ приложений. <br></br>
На УРОВНЕ 4 накапливаются уже предварительно обработанные данные, которые
становятся доступны средствам обработки более высоких уровней. <br></br>
Необходимость в УРОВНЕ 3 связана с генерацией устройствами больших объемов данных (самолет, например, 0,5 Тб/полет). Здесь организуется предварительная обработка этих первичных сырых данных. В результате объем хранения уменьшается и образуется информация, пригодная для последующей глубокой обработки на верхних
уровнях. <br></br>
На УРОВНЕ 2 обеспечивается передача блоков данных, собранных
устройствами. Его особенность в том, что он включает шлюзы,
которые МСЭ-Т относит к уровню 1.
<br></br>
УРОВЕНЬ 1 образуют физические устройства и контроллеры, управляющие несколькими
устройствами. Он примерно соответствует уровню устройства в модели МСЭ-Т. Здесь
проходит граница между реальным аналоговым и цифровым виртуальным мирами.
Колбанёв М.О. Эталонные модели интернета вещей.
            <br></br>
          </p>
          <br></br>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии передачи сигналов">
        <Div>
          <p>
            <a name="t1" style={{ color: "red" }}>
              1. Классификация сетевых технологий.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю.
            <br></br>
            Технологии мультиплексирования (уплотнения) – позволяет повысить
            использование физических сетевых ресурсов, обеспечивающих процесс
            передачи.
            <br></br>
            Технология коммутации - предназначена для организации совместного
            использования сетевых ресурсов, образованных в результате
            мультиплексирования.
          </p>
          <br></br>
          <p>
            <a name="t2" style={{ color: "red" }}>
              2. Информация и ее основные элементы.
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования.
            <br></br>
            Объективность, Достоверность, Полнота, Точность, Актуальность,
            Полезность (ценность).
          </p>
          <br></br>
          <p>
            <a name="t3" style={{ color: "red" }}>
              3. Модель информационного взаимодействия людей.
            </a>
            <br></br>
            Информационное взаимодействие людей обеспечивается передачей
            (перемещением) данных от источника к получателю при помощи
            фундаментального физического процесса, который называется
            электромагнитное в заимодействие.
            <br></br>2 метауровня - 2) идеальный - смысл 1) физиологический -
            сигналы
            <br></br>
            Источник информации -> Передатчик -> Канал (Источник шума) ->
            Приемник -> Адресат
          </p>
          <br></br>
          <p>
            <a name="t4" style={{ color: "red" }}>
              4. Принцип передачи сигналов электросвязи. Электромагнитный
              спектр.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др.
            <br></br>
            Электромагни́тный спектр — совокупность всех диапазонов частот
            электромагнитного излучения.
          </p>
          <br></br>
          <p>
            <a name="t5" style={{ color: "red" }}>
              5. Скорость распространения сигналов электросвязи.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения. Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Радиоволны - близко к скорости света. Витая пара - NVP - 68-72% от
            скорости света. Коаксиальный кабель - NVP - 60-70% от скорости
            света. В оптическом волокне - зависит от коэф. преломления
            сердечника волокна n и определяется как V=c/n.
          </p>

          <br></br>
          <p>
            <a name="t6" style={{ color: "red" }}>
              6. Общая схема системы связи. Характеристики процесса передачи
              сигналов.
            </a>
            <br></br>
            Источник информации -> Передатчик -> Канал (Источник шума) ->
            Приемник -> Адресат
            <br></br>
            Источник информации создает сообщение которые должны быть переданы
            <br></br>
            Передатчик перерабатывает сообщение в сигнал, соответствующим
            характеристикам канала.
            <br></br>
            Канал - среда, используемая для передачи сигнала от передатчика к
            приемнику.
            <br></br>
            Приемник - восстанавливает сообщение, передает адресату.
            <br></br>
            Адресат - получатель сообщения.
          </p>

          <br></br>
          <p>
            <a name="t7" style={{ color: "red" }}>
              7. Информационные обьекты процесса информационного взаимодействия.
            </a>
            <br></br>
            Сообщения - данные в виде кодовой последовательности знаков языка
            взаимодействия, созданные источником. Несет смысл, понятный для
            коммуникантов.
            <br></br>
            Данные - обобщенное обозначение для любой информации, представленной
            в электромагнитной или цифровой форме.
            <br></br>
            Сигнал – данные, имеющие физическую форму, обеспечивающие
            перемещение от отправителя к получателю по физической среде
            взаимодействия. Сигнал – переносчик сообщения в физическом
            пространстве.
          </p>

          <br></br>
          <p>
            <a name="t8" style={{ color: "red" }}>
              8. Обобщенная модель процесса информационного взаимодействия людей
              и ее элементы.
            </a>
            <br></br>2 метауровня - 2) идеальный - смысл (коммуниканты A,B) 1)
            материальный - сообщение(технические средства) + сигнал (физическая
            среда взаимодействия)
          </p>

          <br></br>
          <p>
            <a name="t9" style={{ color: "red" }}>
              9. Примеры процессов информационного взаимодействия людей.
            </a>
            <br></br>
            Общение между людьми (словами), смс-переписка (текст).
          </p>

          <br></br>
          <p>
            <a name="t10" style={{ color: "red" }}>
              10. Основные понятия процесса передачи сигналов.
            </a>
            <br></br>
            Вытекают из обобщенной модели информационного взаимодействия
            <br></br>
            Передача(перемещение данных)
            <br></br>
            1) Сообщение (Язык, Тип сообщения, Вероятность появления, Контент)
            <br></br>
            2) Сигнал (Преобразование, Модуляция, Кодирование)
            <br></br>
            3) Линии связи (Медный кабель, ВОЛС, Эфир, Энергосистемы)
          </p>

          <br></br>
          <p>
            <a name="t11" style={{ color: "red" }}>
              11. Сообщение и языки их представления.
            </a>
            <br></br>
            Сообщение несет смысл, закодированный на языке, который понятен
            адресату.
            <br></br>
            Язык - набор знаков и связей между ними.
            <br></br>
            Жесткий - программирование, знаки пдд. Мягкий - музыка, человеческое
            общение.
          </p>

          <br></br>
          <p>
            <a name="t12" style={{ color: "red" }}>
              12. Сообщение в теории информации.
            </a>
            <br></br>
            Сообщение в произвольное время может быть сохранено отправителем в
            памяти информационной системы и выбрано из памяти получателем,
            которому интерес смысл сообщения.
            <br></br>
            Контент - это смысл сообщений, от которого зависит значимость
            (ценность) сообщений для получателей.
          </p>

          <br></br>
          <p>
            <a name="t13" style={{ color: "red" }}>
              13. Сигнал электросвязи.
            </a>
            <br></br>- это электромагнитное колебание, при помощи которого знаки
            сообщения передаются от отправителя к получателю по каналу связи.
            <br></br>В качестве сигнала могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др.
            <br></br>
            Для преобразования сообщения в сигнал независимыми устройствами или
            одним совмещенным устройством должны быть реализованы 3 операции:
            <br></br>
            1) Преобразование - восстановление: операция изменения вида
            физической величины, представляющей сообщение, таким образом, чтобы
            создать условия для его перемещения по каналу связи.
            <br></br>
            2) Модуляция - операция изменения параметров электромагнитного
            колебания в соответствии с передаваемым сообщением. Колебание,
            выполняющее роль переносчика данных, называется несущей, изменяемые
            параметры несущей - информационными, а устройство, реализующее
            операции мод/демод - модем.
            <br></br>
            3) Кодирование - определяет физическую и материальную сторону
            превращения сообщения в сигнал, это процедура изменения сигнала для
            улучшения условий его доставки. Различают статическое,
            помехоустойчивое, криптографическое и др. виды математического
            кодирования.
          </p>

          <br></br>
          <p>
            <a name="t14" style={{ color: "red" }}>
              14. Классификация и технические характеристики сигналов.
              электросвязи
            </a>
            <br></br>
            Аналоговые - определены в непрерывном времени отрезке значений
            энергии (амплитуды, уровня) сигнала.<br></br>
            Дискретные по времени - задаются непрерывными значениями уровня
            только в отдельных точках оси времени.<br></br>
            Дискретные по уровню - заданы на конечном множестве значений уровней
            сигнала.<br></br>
            Дискретные и по времени и по уровню - имеют отдельные значения
            уровня в отдельных точках оси времени.<br></br>
            Цифровые - можно описать последовательностью чисел.<br></br>
            Детерминированные и случайные. - степени предсказуемости, дет - все
            параметры известны, случайные - один из параметров точно не может
            быть предсказан.<br></br>
            Характеристики:
            <br></br>
            1) длительность - время существования сигнала
            <br></br>
            2) ширина спектра - диапазон частот, в котором сосредоточена
            основная доля энергии сигнала.
            <br></br>
            3) динамический диапазон - отношение в децибелах наибольшой
            мгновенной мощности сигнала к наименьшей, которая необходима для
            обеспечения заданного качества передачи.
          </p>

          <br></br>
          <p>
            <a name="t15" style={{ color: "red" }}>
              15. Ширина спектра и скорость передачи сигналов.
            </a>
            <br></br>
            Ширина полосы канала B - это спектр частот, составляющих сигнал.
            <br></br>
            Скорость передачи данных - это количество бит, передаваемое за 1
            секунду.
            <br></br>
            Пропускная способность канала C - это максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="t16" style={{ color: "red" }}>
              16. Спектральное представление сигналов.
            </a>
            <br></br>
            Кроме зависимости амплитуды от времени, в теории передачи сигналов
            используется его описание функциями частоты. Сумма (совокупность)
            гармонических колебаний называется частотным спектром сигнала.
          </p>

          <br></br>
          <p>
            <a name="t17" style={{ color: "red" }}>
              17. Операции преобразования / восстановления сообщений.
            </a>
            <br></br>
            Преобразование - восстановление: операция изменения вида физической
            величины, представляющей сообщение, таким образом, чтобы создать
            условия для его перемещения по каналу связи.
            <br></br>
            Предполагает изменение физической формы представления данных.
            <br></br>
            Электрозвуковые, радио, электрооптические преобразования.
          </p>

          <br></br>
          <p>
            <a name="t18" style={{ color: "red" }}>
              18. Исторически значимые изобретения для преобразования сигналов.
            </a>
            <br></br>
            Параллельная шина - электромеханическое преобразование.
            <br></br>
            Дискретный сигнал - электротекстовые преобразования.
            <br></br>
            Аналоговый сигнал - электрозвуковые преобразования.
          </p>

          <br></br>
          <p>
            <a name="t19" style={{ color: "red" }}>
              19. Преобразование сигналов радиосвязи.
            </a>
            <br></br>
            Устройство, предназначенное для преобразования радиоволн, называется
            АНТЕННА.
            <br></br>
            Передающая антенна преобразует энергию электромагнитного колебания,
            поступающего от радиопередатчика в электромагнитную волну,
            распространяющуюся в пространстве.
            <br></br>
            Приемные антенны преобразуют энергию электромагнитной волны в
            электромагнитное колебание, поступающего в радиоприемник.
          </p>

          <br></br>
          <p>
            <a name="t20" style={{ color: "red" }}>
              20. Электрооптические преобразования сигналов.
            </a>
            <br></br>
            Преобразование электрического сигнала в изображение на
            люминесцентном экране (кинескоп).
            <br></br>
            Излучатели, фотоприемники, ВОЛС (системы, содержащие
            волоконно-оптический световод).
          </p>

          <br></br>
          <p>
            <a name="t21" style={{ color: "red" }}>
              21. Операции модуляции и демодуляции.
            </a>
            <br></br>
            Модуляция - операция изменения параметров электромагнитного
            колебания в соответствии с передаваемым сообщением. Колебание,
            выполняющее роль переносчика данных, называется несущей, изменяемые
            параметры несущей - информационными, а устройство, реализующее
            операции мод/демод - модем.
            <br></br>
            По виду электромагнитного колебания - аналоговая и импульсная.
            <br></br>
            По виду информационного параметра - амплитудную, частотную, фазовую,
            кодовую, комбинированную.
            <br></br>
            По диапазону частот электромагнитного спектра - проводную, радио,
            оптическую.
          </p>
          <br></br>
          <p>
            <a name="t22" style={{ color: "red" }}>
              22. Аналоговая и импульсная модуляция сообщений.
            </a>
            <br></br>
            Аналоговая отображает сообщение изменением амплитуды, частоты или
            фазы синусоидального колебания несущей частоты.
            <br></br>
            Импульсная - модулирующий сигнал представлен последовательностью
            импульсов.
          </p>
          <br></br>
          <p>
            <a name="t23" style={{ color: "red" }}>
              23. Аналоговая частотная модуляция.
            </a>
            <br></br>- при которой информационный сигнал по определенному закону
            управляет частотой несущего колебания.
          </p>
          <br></br>
          <p>
            <a name="t24" style={{ color: "red" }}>
              24. Аналоговая модуляция по амплитуде и фазе.
            </a>
            <br></br>
            совмещает в себе аналоговые амплитудную и фазовую модуляцию и
            способна передавать несколько бит одним символом.
          </p>
          <br></br>
          <p>
            <a name="t25" style={{ color: "red" }}>
              25. Импульсно-кодовая модуляция.
            </a>
            <br></br>
            Процесс модуляции сводится к измерению амплитуды аналогового сигнала
            в моменты времени, отстоящие от друг друга на такт временной
            дискретизации, и, затем, к кодированию этих амплитуд цифровым кодом.
            <br></br>
            Используются процедуры квантования и компандирования.
          </p>
          <br></br>
          <p>
            <a name="t26" style={{ color: "red" }}>
              26. Структура кадра первичного потока ИКМ.
            </a>
            <br></br>1 канал (слот) - 8 бит за 125мкс (64кбит/с)
            <br></br>1 цикл (кадр) - 32 канала, 256 бит, 125мкс
            <br></br>1 сверхцикл - 16 циклов, 2048 бит, 2мс.
          </p>

          <br></br>
          <p>
            <a name="t27" style={{ color: "red" }}>
              27. Оптическая модуляция.
            </a>
            <br></br>В качестве оптической несущей используют электромагнитное
            колебание с гармоническим законом измерения напряженности
            электрического поля. Информационный модулирующий сигнал может
            воздействовать на амплитуду, частоту и фазу несущей. Кроме того,
            можно управлять поляризацией оптического колебания. Информационный
            сигнал может быть элекрическим, акустическим, механическим,
            оптическим.
          </p>

          <br></br>
          <p>
            <a name="t28" style={{ color: "red" }}>
              28. Операции кодирования / декодирования.
            </a>
            <br></br>
            Кодирование - определяет физическую и материальную сторону
            превращения сообщения в сигнал, это процедура изменения сигнала для
            улучшения условий его доставки. Различают статическое,
            помехоустойчивое, криптографическое и др. виды математического
            кодирования.
            <br></br>
            Надо различать физическое и математическое кодирование цифровых
            сигналов.
          </p>

          <br></br>
          <p>
            <a name="t29" style={{ color: "red" }}>
              29. Физическое кодирование цифровых сигналов.
            </a>
            <br></br>В процессе распространения данных по цифровым сетям связи
            на стороне источника информации каждый бит представляется
            электрическим импульсом, который занимает несколько состояний,
            соответствующим логическим 1 и 0 или их комбинации.
          </p>

          <br></br>
          <p>
            <a name="t30" style={{ color: "red" }}>
              30. Логическое кодирование цифровых сигналов. Исключение длинных
              последовательностей одинаковых по значению бит при помощи
              избыточных кодов или скрэмблирования.
            </a>
            <br></br>
            Предшествует физическому кодированию, не влияет на смысл сообщения и
            предназначено для изменения исходной битовой последовательности
            таким образом, чтобы создать условия для ее успешной передачи по
            каналу связи.
            <br></br>
            Избыточные коды основаны на разбиении исходной последовательности
            бит на группы, которые затем заменяются новым кодом, состоящим из
            большего количества бит таких, которые не содержат длинных цепочек
            одинаковых бит.
            <br></br>
            Скремблирование предполагает вычисление значения бита новой линейной
            битовой последовательности как функцию от текущего и предшествующих
            битов исходной последовательности.
          </p>

          <br></br>
          <p>
            <a name="t31" style={{ color: "red" }}>
              31. Логическое кодирование цифровых сигналов. Помехоустойчивое
              кодирование. Обеспечение конфиденциальности.
            </a>
            <br></br>
            Предоставляет возможность обнаружения ошибок передачи на приемной
            стороне. Конфиденциальность данных обеспечивается при помощи
            криптографического кодирования.
          </p>

          <br></br>
          <p>
            <a name="t32" style={{ color: "red" }}>
              32. Пример системы логического кодирования данных в стандарте
              IS-95.
            </a>
            <br></br>
            Типичный процесс логического кодирования речевых данных в мобильной
            сети 2G с кодовым разделением каналов стандарта IS-95 (cdmaOne
            стандарт) включает следующие этапы:
            <br></br>
            1) речевой сигнал поступает в речевой кодек, оцифровывается и
            сжимается
            <br></br>
            2) далее следует блок помехоустойчивого кодирования, который
            кодирует сигналы циклическим кодом, способным исправлять до 3 ошибок
            в пакете данных.
            <br></br>
            3) реализуется защита от пачечных ошибок возникающих в радиоканале
            <br></br>
            4) далее располагается блок криптографического кодирования от
            несанкционированного подслушивания.
            <br></br>
            5) данные перемножаются на код Уолша для реализации процедуры
            кодового разделения каналов CDMA
            <br></br>
            6) перед модуляцией блоки данных умножаются на две псевдослучаные
            последовательности ПСП1 и ПСП2 для синхронизации выходных и входных
            потоков.
          </p>

          <br></br>
          <p>
            <a name="t33" style={{ color: "red" }}>
              33. Сравнение аналоговых и дискретных сигналов.
            </a>
            <br></br>
            Аналоговые отображают непрерывность времени и пространства в природе
            и основываются на неделимости обьекта как целого.
            <br></br>
            Дискретные предполагают возможность разделения обьекта и во времени
            , и в пространстве на относительно самостоятельные составляющие. Их
            удобно преобразовывать средствами цифровой вычислительной техники.
          </p>

          <br></br>
          <p>
            <a name="t34" style={{ color: "red" }}>
              34. Сравнение аналоговых и дискретных каналов связи.
            </a>
            <br></br>
            По отношению к каналу связи сигналы во всех случаях представляют
            собой модулированные электромагнитные колебания.
            <br></br>
            Аналоговые каналы настроены на модулирующие воздействия, которые
            приводят к непрерывным изменениям информационных парметров сигнала.
            <br></br>
            Дискретные каналы - сигнал занимает конечное число состояний. Каждое
            состояние называется символ и соответствует одному из знаков
            дискретного сообщения.
          </p>

          <br></br>
          <p>
            <a name="t35" style={{ color: "red" }}>
              35. Информационные характеристики сигналов и их связь с
              физическими характеристиками.
            </a>
            <br></br>
            1) длительность - время существования сигнала - больше времени -
            большее число изменений значений параметров
            <br></br>
            2) ширина спектра - диапазон частот, в котором сосредоточена
            основная доля энергии сигнала. - высокочастотные гармоники чаще
            меняют значение информационно значимых параметров в единицу времени
            <br></br>
            3) динамический диапазон - отношение в децибелах наибольшой
            мгновенной мощности сигнала к наименьшей, которая необходима для
            обеспечения заданного качества передачи. - мгновенное значение
            амплитуды сигнала может принимать большее число различимых значений.
          </p>

          <br></br>
          <p>
            <a name="t36" style={{ color: "red" }}>
              36. Информационный объем сигнала при распространении и сохранении
              данных.
            </a>
            <br></br>
            Измеряется в битах и позволяет сопоставить обьем данных,
            выработанных источником информации для передачи его по физической
            среде. В общем случае инф. обьем сигнала источника зависит от 3
            параметров:
            <br></br>
            1) время формирования данных источником - которое задает
            длительность сигнала (время существования)
            <br></br>
            2) частота формирования знаков - количество знаков которые могут
            сформированы источником за время (задает спектр сигнала)
            <br></br>
            3) количество бит, содержащихся в 1 знаке
          </p>

          <br></br>
          <p>
            <a name="t37" style={{ color: "red" }}>
              37. Информационный объем канала.
            </a>
            <br></br>
            Общее представление о возможностях и способах управления каналами
            связи, как среды для распространения сигналов, дает обьем канала V,
            который измеряется в битах и зависит от трех параметров:
            <br></br>
            1) время использования канала<br></br>
            2) пропускная способность канала - максимальная скорость передачи
            дискретных символов
            <br></br>
            3) Количество бит, которое переносит 1 символ.
          </p>

          <br></br>
          <p>
            <a name="t38" style={{ color: "red" }}>
              38. Алгоритмический объем сигнала и пиковая производительность
              процессора.
            </a>
            <br></br>- задает сложность алгоритма - это количество операций,
            которые требуется выполнить для получения искомых данных из
            исходных. Величина V зависит не только от особенностей алгоритма, но
            и от обьема входных данных (информационного обьема сигнала) и от
            особенностей (содержательной стороны) самих данных.
            <br></br>
            Пиковая производительность процессора: Gпр = F.пр (тактовая частота
            вычислительного ядра в ГЦ ) * r.пр (количество операций выполняемых
            за один такт) * k.пр (число вычислительных ядер у процессора)
          </p>

          <br></br>
          <p>
            <a name="t39" style={{ color: "red" }}>
              39. Что такое линия связи? Характеристики и классификация линий
              связи.
            </a>
            <br></br>- это совокупность физической среды и технических
            устройств, обеспечивающих передачу сигналов.
            <br></br>
            Линию связи характеризуют:
            <br></br>
            1) время, в течении которого она может использоваться для передачи
            сигналов
            <br></br>
            2) пропускная способность, измеряемая в обьеме данных, которые могут
            быть переданы по линии связи в единицу времени (чем выше пропускная
            способность, тем с большей скоростью можно передавать данные)
            <br></br>
            3) физические характеристики линии, которые во всех случаях должны
            быть согласованы с физическими характеристиками сигналов
            <br></br>
            Бывают проводными (на основе кабелей) и беспроводными (естественные
            обьекты - атмосфера, космос, толща земли. зависят от законов
            природы, а не от техн. решений).
          </p>

          <br></br>
          <p>
            <a name="t40" style={{ color: "red" }}>
              40. Особенности медных кабелей.
            </a>
            <br></br>
            Кабель с медной жилой обладает рядом достоинств:
            <br></br>
            Высокая токо- и теплопроводность. Для электромонтажных работ лучше
            использовать кабель не с алюминиевой, а с медной жилой, так как он
            имеет меньший диаметр сечения. Свойства кабеля не меняются при
            окислении металла.
            <br></br>
            Гибкость. Медные изделия отличаются пластичностью и устойчивостью к
            изломам при скручивании и изгибе. Это облегчает монтаж и
            эксплуатацию материала.<br></br>
            Стойкость к коррозии и долговечность. Полная замена установленной в
            помещении проводки требует капитального ремонта. Медный кабель имеет
            срок эксплуатации 30-35 лет.<br></br>
            Нет риска возгорания проводов. Медный кабель не поддерживает
            горение, а изоляционный материал выделяет при пожаре минимальное
            количество дыма и газа.
          </p>

          <br></br>
          <p>
            <a name="t41" style={{ color: "red" }}>
              41. Особенности волоконно-оптических кабелей.
            </a>
            <br></br>
            Может содержать один или несколько световодов (оптических волокон).
            <br></br>
            Каждый световод - оптически прозрачная нить, изготовленная из стекла
            или пластика и способная переносить внутри световой луч посредством
            полного внутреннего отражения.
            <br></br>
            Плюсы: помехозащищенность и секретность передаваемой информации.
            Электромагнитные помехи не способны исказить световой сигнал, а сам
            сигнал не порождает внешних электромагнитных излучений.
            <br></br>
            Невозможно несанкционированно подключиться. Меньше величина
            затухания.
            <br></br>
            Минусы: высокая сложность монтажа, меньше прочность и гибкость. Хуже
            переносит механическое растяжение, перепады температуры.
            Чувствительность к ионизирующим излучениям - снижается прозрачность
            нити и увеличивается затухание сигнала.
          </p>

          <br></br>
          <p>
            <a name="t42" style={{ color: "red" }}>
              42. Особенности линий радиосвязи.
            </a>
            <br></br>
            использует радиоволны в качестве носителя сигнала.
            <br></br>
            Радиоволны представляют собой электромагнитные колебания.
            <br></br>
            Характеризуется частотой, длиной волны и мощностью переносимой
            энергии.
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии мультиплексирования">
        <Div>
          <p>
            <a name="m1" style={{ color: "red" }}>
              1. Классификация сетевых технологий. Технологии
              мультиплексирования.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю.
            <br></br>
            Технологии мультиплексирования – позволяет повысить использование
            физических сетевых ресурсов, обеспечивающих процесс передачи. – это
            процесс, позволяющий увеличить пропускную способность физических
            линий связи за счет одновременной передачи по ним нескольких
            сигналов.
            <br></br>
            Технологии коммутации – организация совместного использования
            отправителями групповых сетевых ресурсов, образованных в результате
            мультиплексирования.
          </p>
          <br></br>
          <p>
            <a name="m2" style={{ color: "red" }}>
              2. Модель процесса мультиплексирования. Мультиплексор,
              демультиплексор, канал связи.
            </a>
            <br></br>- к одной и той же линии при помощи специального
            оборудования (мультиплексора) подключается несколько отправителей
            сообщений;
            <br></br>- сообщения всех отправителей одновременно перемещаются к
            получателям на приемную сторону.
            <br></br>- получатели на приемной стороне при помощи демультплексора
            принимают из линии связи каждый свое сообщение.
            <br></br>
            <img src={img1} />
            <br></br>
            Мультиплексор – это устройство, реализующее функцию
            мультиплексирования (он смешивает перед передачей в линию сигналы,
            отображающие сообщения разных информационных источников).
            <br></br>
            Демультиплексор реализует обратную функцию (он разделяет и
            преобразовывает сигналы, поступившие из линии, в независимые
            сообщения).
            <br></br>
            При мультиплексировании физическая высокоскоростная линия связи
            разделяется на отдельные каналы, каждый из которых одновременно с
            другими каналами может использоваться для организации
            информационного взаимодействия пользователей. Доступ к каналу
            пользователи могут получать через низкоскоростные линий связи.
          </p>
          <br></br>
          <p>
            <a name="m3" style={{ color: "red" }}>
              3. Иерархическая структура процесса мультиплексирования.
            </a>
            <br></br>
            При мультиплексировании образуются иерархические каскады
            мультиплексоров.<br></br>В первом каскаде объединяются
            информационные потоки нескольких низкоскоростных линий связи, через
            которые пользователи подключаются к входам сети.<br></br>
            Во втором каскаде объединяются линии, уплотненные в первом каскаде и
            так далее. Для выделения исходных информационных потоков необходимо
            построить соответствующую иерархию демультиплексоров.<br></br>
            Важной характеристикой уплотненной линии является количество
            каналов, которое может быть образовано в пределах одного медного
            кабеля, одной оптической линией или одной радиотехнической системой.
            Оно зависит от выбранного способа выделения каналов, максимальной
            скорости передачи информации по соответствующей линии связи и той
            скорости, которая выделяется на отдельные каналы.
          </p>
          <br></br>
          <p>
            <a name="m4" style={{ color: "red" }}>
              4. Классификация технологий образования каналов при
              мультиплексировании.
            </a>
            <br></br>
            Технологии мультиплексирования используют свойства электромагнитных
            колебаний и различаются способом образования каналов при уплотнении
            физической линии связи.
            <br></br>
            Частотное мультиплексирование - FDM
            <br></br>
            Временное мультиплексирование - TDM
            <br></br>
            Кодовое мультиплексирование - CDMA
            <br></br>
            Пространственное мультиплексирование
          </p>
          <br></br>
          <p>
            <a name="m5" style={{ color: "red" }}>
              5. Принцип частотного мультиплексирования.
            </a>
            <br></br>
            Частотное мультиплексирование FDM (Frequency-Division Multiplexing)
            предполагает, что каналы занимают относительно узкие частотные
            полосы в отведенных для них частотных диапазо- нах. Каждый входной
            сигнал накладывается на частоту своего канала (эту частоту называют
            несущей) и поэтому в частотной области не перекрывается с другими
            входными сигналами. Выделение конкрет- ного сигнала из смеси,
            передаваемой по линии, осуществляется при помощи операции
            фильтрации.
            <br></br>Частотное мультиплексирование реализуется при условии, что
            ширина спектра передаваемых сигналов существенно ниже, чем полоса
            пропускания физической среды распространения.
          </p>

          <br></br>
          <p>
            <a name="m6" style={{ color: "red" }}>
              6. Частотное мультиплексирование на аналоговой сети.
            </a>
            <br></br>
            Частотное мультиплексирование в аналоговых сетях называется
            частотным разделением каналов (ЧРК).
            <br></br>
            Единицей измерения емкости аналоговых сис- тем передачи является
            канал тональной часто- ты (КТЧ), который занимает диапазон частот от
            0,3 до 3,4 кГц.
            <br></br>
            Совокупность двенадцати КТЧ, занимающих в диапазоне частот смежные
            участки с общей шириной 48 кГц, называется первичной группой.
            <br></br>
            Пять первичных групп, зани- мающие смежные участки с общей шириной
            210 кГц – вторичной группой.
            <br></br>
            Пять вторичных групп или триста КТЧ, занимающих в диапазоне частот с
            общей ши- риной 1232 кГц смежные участки с интервалами меж- ду
            вторичными группами 8 кГц – третичной группой.
            <br></br>
            Для объединения 300 КТЧ требуется 3 каскада мультиплексоров, для
            разделения на приемной стороне – 3 каскада демультиплексоров.
          </p>

          <br></br>
          <p>
            <a name="m7" style={{ color: "red" }}>
              7. Частотное мультиплексирование в технологии ADSL.
            </a>
            <br></br>
            Одной из востребованных индивидуальными пользователями остается
            технология ADSL (асинх- ронная цифровая линия), в которой каналы для
            приема данных имеют более высокую скорость, чем каналы для передачи
            данных. Главное ее достоинство – возможность использования старой
            медной инфраструктуры на абонентском участке. <br></br>
            Передача сигналов реализуется при помощи модема, установленного у
            абонента, и мульти- плексора доступа DSLAM (DSL Access Multi-
            plexer,), находящегося на АТС. Аналоговая те- лефонная линия
            используется одновременно и сетью передачи данных, и телефонной
            сетью связи.
          </p>

          <br></br>
          <p>
            <a name="m8" style={{ color: "red" }}>
              8. Частотное разделение сигналов абонентской сигнализации.
            </a>
            <br></br>
            Для сигнального взаимодействия абонента с АТС и другими сетевы- ми
            службами при предоставлении дополнительных услуг стал использоваться
            тональный набор в форме двухтонального многочастотного аналогового
            сигнала DTMF (Dual-Tone Multi-Frequency), отправляемого с клавиатуры
            телефона. Сигналы формируются сложением двух тональных частот, по
            одной из высокочастотной и низкочастотной групп. Частоты выбраны
            таким об- разом, чтобы избежать гармонических помех от речевых
            сигналов. Для кодирования одного сигнала одна частота берется из
            строки и одна – из столбца таблицы. Имеется возможность закодировать
            16 разных символов. Максимальная скорость набора номера в тональном
            режиме составляет 7 цифр в секунду.
          </p>

          <br></br>
          <p>
            <a name="m9" style={{ color: "red" }}>
              9. Мультиплексирование по длине волны.
            </a>
            <br></br>
            это технология, позволяющая одновременно передавать несколько
            информационных каналов по од- ному оптическому волокну на разных
            длинах волн. Ее можно рассматривать как особый вид частот- ного
            мультиплексирования на частотах выше 100 - 200 ТГц. В порядке
            уменьшения частотного раз- носа каналов различают грубые (CWDM),
            плотные (DWDM) и высокоплотные (HDWDM) сиcтемы.
            <br></br>
            Длина волны для передачи сигнала выбирается исходя из ОКОН
            ПРОЗРАЧНОСТИ – диапазонов длин волн оптического излуче- ния, в
            котором имеет место меньшее, по сравнению с другими диапазонами,
            затухание излучения в оптическом волокне. Длину волны 850 нм
            используют для многомодового, 1310 нм – и для многомодового, и для
            одномодового, а 1550 нм – только для одномодового оптоволокна.
            <br></br>Возможность существования устройств WDM основан на свойстве
            световодов одновременно пропускать множество сигналов, которые,
            распространяясь, не взаимодействуют друг с другом. Это дает
            возможность ввести в волоконный световод одновременно излучение от
            нескольких источников, работающих на разных длинах волн λ1,…, λn , а
            на приемном конце с помощью оптических фильтров разде- лить эти
            сигналы.
            <br></br>
            ВОЛС – это система, которая содержит активные (модуляторы,
            мультиплексор/демультиплексор, регенераторы (для восстановления
            формы оптических импульсов), усилители мощности сигнала и др.) и
            пассивные устройства (кабель, оптические муфты и кросс и др.).
          </p>

          <br></br>
          <p>
            <a name="m10" style={{ color: "red" }}>
              10. Перспективы мультиплексирования ВОЛС.
            </a>
            <br></br>
            Компания «Т8 НТЦ» разрабатывает DWDM-системы с пропускной
            способностью 25Тбит/с. Техническое решение основано на использовании
            250 информационных каналов со скоростью 100 Гбит/с каждый в формате
            DP-QPSK. Для облегчения управляемости используется 25 суперка-
            налов, каждый из которых объединяет десять каналов и имеет скорость
            передачи 1 Тбит/с. В «высокоплотной» HDWDM- системе разнос несущих
            уменьшен до 33 ГГц (в CWDM-системах он более 2500 ГГц, а в DWDM –
            около 100 ГГц), что при ширине спектра источников менее 1 ГГц
            позволяет разместить в полосе высокой прозрачности кварцевого
            волокна десятки-сотни спектральных каналов.
          </p>

          <br></br>
          <p>
            <a name="m11" style={{ color: "red" }}>
              11. Принцип временного мультиплексирования.
            </a>
            <br></br>
            предполагает, что все время использования линии делится на циклы
            передачи и временные слоты, которые и образу- ют каналы. В
            распоряжение источникам периодически один раз за цикл
            предоставляется весь ресурс линии связи на время продолжительности
            слота. В этом случае для выделения нужного сигнала при приеме
            необходимо синхронизировать работу передающей и приемной систем.
            <br></br>Временное мультиплексирование реализуется при условии, что
            по дискретным значениям энергии сигнала в выделяемых слотах можно
            полностью восстановить сигнал на приемной стороне.
          </p>

          <br></br>
          <p>
            <a name="m12" style={{ color: "red" }}>
              12. Структура первичного потока ИКМ.
            </a>
            <br></br>1 канал (слот) - 8 бит за 125мкс (64кбит/с)
            <br></br>1 цикл (кадр) - 32 канала, 256 бит, 125мкс
            <br></br>1 сверхцикл - 16 циклов, 2048 бит, 2мс.
          </p>

          <br></br>
          <p>
            <a name="m13" style={{ color: "red" }}>
              13. Временное мультиплексирование и проблема синхронизации.
              Классификация типов синхронизации в сетях связи.
            </a>
            <br></br>
            Важное отличие TDM от FDM – это необходимость синхронизации.
            <br></br>
            Синхронизация (от др.-греч. одновременный) – это поддержание хода
            протекания нескольких процессов на согласованной скорости (как на
            значке слева). В технике различают три разных типа синхронизации,
            отличающиеся сложностью реализации и степенью согласованности
            процессов.<br></br>
            1) частотная синхронизация - означает, что все происходящие в
            системе периоди- ческие процессы (события) соответствуют одной и той
            же средней частоте (скорости).
            <br></br>
            2) фазовая синхронизация - ставит более сложную задачу – помимо
            средней частоты всех событий должны быть достаточно близки и фазы
            этих событий.
            <br></br>
            3) временная синхронизация - призвана, кроме того, обеспечить
            расположение фаз всех событий в привязке к какой-либо временной
            шкале.
          </p>

          <br></br>
          <p>
            <a name="m14" style={{ color: "red" }}>
              14. Основные понятия систем синхронизации сетей: Синхронная сеть,
              проскальзывание, фазовые дрожания, первичный эталонный источник,
              первичный эталонный генератор, ведомый задающий генератор,
              иерархическая синхронизированная сеть.
            </a>
            <br></br>
            1) Синхронная сеть – сеть, в которой значащие моменты сигналов
            подстраиваются таким образом, чтобы установился синхронизм и
            значащие моменты точно повторялись с некоторой средней скоростью.
            <br></br>2) Проскальзывание (slip) – исключение или повторение в
            цифровом сигнале одного или нескольких бит, происходящее вследствие
            различия в скоростях записи и считывания буферных устройств.
            <br></br>3) Фазовые дрожания – отклонения значащих моментов
            цифрового сигнала от их идеальных положе- ний во времени.
            Кратковременные отклонения с частотой более 10 Гц называются
            джиттер, а долговременные отклонения с частотой менее 10 Гц –
            блуждания (вандер).
            <br></br>4) Первичный эталонный источник ПЭИ предназначен для
            формирования эталонных сигналов синхронизации и строится либо на
            основе цезиевого или водородного стандарта частоты, либо на основе
            спутниковых систем ГЛОНАСС или GPS (GPS используется в качестве
            резерва).
            <br></br>5) Первичный эталонный генератор ПЭГ – высокостабильный
            генератор, долговременное относи- тельное отклонение частоты
            которого от номинального значения поддерживается не превышающим
            1x10-11 при контроле по универсальному координированному времени.
            Этот генератор обладает на сети синхронизации наивысшим качеством и
            занимает высшую (первую) ступень в иерархии.
            <br></br>6) Ведомый задающий генератор ВЗГ – генератор, фаза кото-
            рого подстраивается по входному сигналу, полученному от генератора
            более высокого или того же качества. Ведомый задающий генератор
            наивысшего качества занимает вторую и третью ступени в иерархии сети
            синхронизации.
            <br></br>7) Иерархическая синхронизированная сеть – сеть, в ко-
            торой каждому генератору придан определенный статус управления им со
            стороны других генераторов.
          </p>

          <br></br>
          <p>
            <a name="m15" style={{ color: "red" }}>
              15. Синхронизация сетей при использовании временного
              мультиплексирования.
            </a>
            <br></br>
            Синхронизация сетевых процессов – это поддержание работы
            оборудования цифровых сетей на согласованной скорости, которая
            обеспечивает реализацию процессов передачи и приема данных в
            определенном порядке с допустимым сдвигом во времени.
            <br></br>
            1) Тактовая - обеспечивает правильное чтение битов в канале связи за
            счет согласования частот тактовых генераторов на взаимодействующих
            сетевых центрах. К ошибкам приводят фазовые дрожания из-за
            нестабильности параметров генераторов и линий передачи, а также
            разной скорости распространения частотных составляющих сигналов;
            <br></br>
            2) Цикловая - выделяет в цикловой структуре битового потока моменты
            нача- ла сверхциклов, циклов (кадров) и каналов (временных слотов).
            В результате данные из каждого канала поступают в назначенные им
            приемные устройства, а сигналы управления – к соответствующим
            сетевым центрам. Способ реализации – в состав группового цифрового
            сигнала вводятся синх- росигналы, которые отмечают начало цикла
            передачи. Кроме того, циклы входных данных записыва- ются в буферы
            со скоростью передающего генератора, а считываются оттуда уже со
            скоростью приемного генератора. Переполнение буфера (проскальзывание
            – slip) приводит или к потери цикла, или к повторному приему цикла,
            но не нарушает цикловую синхронизацию.
            <br></br>
            3) Сетевая - Она поддерживает точность и стабильность во времени
            всех тактовых генераторов сети. Способ реализации – создание сетей
            синхронизации (на базе ГЛОНАС).
          </p>

          <br></br>
          <p>
            <a name="m16" style={{ color: "red" }}>
              16. Режимы сетевой синхронизации.
            </a>
            <br></br>
            1) Синхронный режим является нормальным режимом работы цифровой
            сети, при котором проскальзывания носят только случайный характер.
            Этот режим обычно используется в пределах регионов синхронизации,
            границы которых совпадают с границами национальных цифровых сетей
            государств средних размеров.
            <br></br>
            2) Синхронный режим является нормальным режимом работы цифровой
            сети, при котором проскальзывания носят только случайный характер.
            Этот режим обычно используется в пределах регионов синхронизации,
            границы которых совпадают с границами национальных цифровых сетей
            государств средних размеров.
            <br></br>
            3) Плезиохронный режим работы возникает на цифровой сети, когда
            генератор ведомого узла полностью теряет возможность внешней
            принудительной синхронизации вследствие отказов как основного, так и
            всех резервных путей синхронизации, но способен автономно
            поддерживать точность установки частоты не хуже 1*10-9.
          </p>

          <br></br>
          <p>
            <a name="m17" style={{ color: "red" }}>
              17. Временное мультиплексирование в сетях GSM.
            </a>
            <br></br>
            GSM (Global System for Mobile communications) – глобальный стандарт
            цифровой мобильной сото- вой связи, с разделением каналов по частоте
            и времени.
            <br></br>
            Частотное мультиплексирование. Передача сигналов от мобильной
            станции (МС) к базовой стан- ции (БС) осуществляется в диапазоне
            890-915 МГц, а БС к МС – в диапазоне 935-960 МГц. И пря- мой, и
            обратный диапазоны разбиты на 124 частотных канала с разносом между
            частотами 200 кГц.
            <br></br>
            Временное мультиплексирование. Каждый частотный канал используют 8
            абонентов, пе- редавая в режиме TDM 148-битовые кадры:
            <br></br>- информационные биты разделены на две порции по 57 бит
            каждая,<br></br>- последовательность Sync – это известная комбинация
            битов, уникальная для каждой ячейки, используемая для настройки
            параметров приемника по получаемому сигналу,<br></br>- в каждом
            канальном интервале передаются служебные сигналы синхронизации,
            управления и др., а также защитные биты, предохраняющие от наложения
            сигналов соседних каналов.<br></br>
            На режим TDM влияет время доставки данных между МС и БС, а оно, в
            свою очередь, зависит от расстояния между станциями. Для исключения
            попадания сигналов от мобильных станций, находящихся на разных
            расстояниях от БС, на общие временные интервалы, БС осуществляет
            временной сдвиг, зависящий от расстояния. При этом, также,
            регулируется мощность излучаемых сигналов.
          </p>

          <br></br>
          <p>
            <a name="m18" style={{ color: "red" }}>
              18. Временное мультиплексирование в пассивных оптических сетях
              PON.
            </a>
            <br></br>
            Технология проводного доступа по пассивным оптическим сетям PON
            (passive optical network) связывает многие абонентские узлы с одним
            сетевым центром, образуя соединение «точка-многоточка» (P2MP –
            point-to-multipoint). Пассивность означает отсутствие в сети
            элементов, усиливающих сигнал в процессе его распространения в
            направлении от сетевого центра к абонентским узлам и обратно.
            Активные устройства имеют следующие названия и выполняют следующие
            функции:
            <br></br>
            терминал оптической линии OLT (Optical Line Terminal) –
            располагается в сетевом центре, генерирует оптические сигналы и
            мультиплексирует трафик пользователей;<br></br>
            оптический сетевой терминал ONT (Optical Network Termination) –
            располагается в абонентском устройстве. Он может иметь практически
            любые интерфейсы для подклю- чения терминалов пользователей по витой
            паре, по коакси- альному кабелю, по линии радиосвязи или по
            локальным сетям. Взаимодействуя с OLT, он выделяет из общего потока
            входные данные, направляемые к его пользователям
            <br></br>В OLT и ONT встроены мультиплексоры WDM, разделяющие потоки
            данных. Потоки данных от OLT ко всем ONT передаются на длине волны
            1490 нм (или1550 нм) и каждый абонентский узел ONT, читая адресные
            поля, самостоятельно выделяет из этого общего широковещательного
            потока предназначенную только ему часть данных. Потоки данных от
            всех ONT к OLT передаются на длине волны 1310 нм. Для разделения
            сиг- налов, поступающих от разных пользователей используется
            уплотнение TDM. Каждому активному ONT выделяется определенный
            временной домен, в течении которого он имеет возможность переда-
            вать все данные, накопленные за время занятости канала 1310 нм
            другими ONT. Здесь нет необходимости в передаче сигналов
            синхронизации и управления, поэтому нет циклов и сверхциклов.
          </p>

          <br></br>
          <p>
            <a name="m19" style={{ color: "red" }}>
              19. Принцип мультиплексирования с кодовым разделением.
            </a>
            <br></br>С соответствии с практикой внедрения мультиплексирования с
            кодовым разделением каналов его на- зывают множественный доступ с
            кодовым разделением CDMA (Code Division Mul- tiple Access). В этой
            технологии все источники имеют право передавать сообщения
            ОДНОВРЕМЕННО В ОДНОМ СПЕКТРЕ ЧАСТОТ. При этом каждому источнику
            присваивается уникальный n- значный двоичный код и каждый интервал
            передачи бита раз- бивается на n временных периодов, называемых
            чипами (chip).
            <br></br>Чип-код каждого канала уникален и имеет длину 64, 128 или
            более бит. Это значит, что длина линейной кодовой комби- нации
            увеличивается, а длительность одного элементарного сигнала (символа)
            уменьшается многократно. Единичное и нулевое значения бита данных
            источника передаются при помощи прямого и инверсного значений одного
            и того же чип-кода.
            <br></br>Чип-коды для разных источников должны быть попарно ортого-
            нальны. Тогда они не создают взаимных помех, не взаимодейст- вуют
            друг с другом и могут передаваться по каналу одновременно. На
            приемной стороне методами теории кодирования из смеси ортогональных
            сигналов можно выделить любой из одновремен- но переданных сигналов,
            если только известен его чип-код.
            <br></br>Достоинства CDMA востребованы на сотовых сетях. К ним
            относятся высокая помехоустойчивость широкополосного сигнала к
            узкополосным помехам, энергетическая эффективность процесса пере-
            дачи данных и защищенность от несанкционированного доступа к
            соединениям без знания ин- дивидуальной кодовой последовательности
            канала. К недостаткам можно отнести сложность оборудования и жесткие
            требования к синхронизации про- цессов взаимодействия.
          </p>

          <br></br>
          <p>
            <a name="m20" style={{ color: "red" }}>
              20. Корреляционная функция и ортогональность сигналов.
            </a>
            <br></br>
          </p>

          <br></br>
          <p>
            <a name="m21" style={{ color: "red" }}>
              21. Общий алгоритм кодового разделения в сотовых сетях.
            </a>
            <br></br>
            При передаче сигналов от базовой к абонентским станциям выполняются
            следующие действия:<br></br>
            1) каждому из n информационных потоков, направляемым n
            пользователям, присваивается свой чип-код, попарно ортогональный с
            другими чип-кодами;<br></br>
            2) информационный поток i-го пользователя кодируется i-м чип-кодом;
            <br></br>
            3) полученные сигналы складываются в суммирующем устройстве и
            отправляются в линию;<br></br>
            На приемной стороне абонентская станция:<br></br>
            1) получает свой чип-код;<br></br>
            2) синхронизирует сигнал из линии и периодический чип-код и
            направляет их на входы коррелятора;<br></br>
            3) вычисляет при помощи коррелятора взаимную корреляционную функцию
            этих сигналов;<br></br>
            4) по отклику на выходе коррелятора определяет значения бит своего
            информационного потока.
          </p>
          <br></br>
          <p>
            <a name="m22" style={{ color: "red" }}>
              22. Функции Уолша и их свойства.
            </a>
            <br></br>В качестве ортогональных чип-кодов в системах CDMA
            применяют функции Уолша. Это семейство кодов, образующих
            ортогональную систему со значениями 1 и -1 на всей области
            определения.
            <br></br>
          </p>
          <br></br>
          <p>
            <a name="m23" style={{ color: "red" }}>
              23. Кодовое разделение на примере двух каналов
            </a>
            <br></br>
          </p>
          <br></br>
          <p>
            <a name="m24" style={{ color: "red" }}>
              24. Классификация методов множественного доступа в сетях.
            </a>
            <br></br>
            1G / 2G GSM / 2G CDMA (IS-95) / 3G UMTS / 3G UMTS / 3G CDMA-2000
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии коммутации">
        <Div>
          <p>
            <a name="k1" style={{ color: "red" }}>
              1. Классификация сетевых технологий. Технологии коммутации.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю.
            <br></br>
            Технологии мультиплексирования (уплотнения) – позволяет повысить
            использование физических сетевых ресурсов, обеспечивающих процесс
            передачи.
            <br></br>
            Технология коммутации - предназначена для организации совместного
            использования сетевых ресурсов, образованных в результате
            мультиплексирования. – это телекоммуникационная технология, при
            помощи которой: 1) занимаются каналы связи и 2) строятся сетевые
            соединения.
          </p>
          <br></br>
          <p>
            <a name="k2" style={{ color: "red" }}>
              2. Зачем нужны центры коммутации и каковы последствия их
              использования на сетях связи?
            </a>
            <br></br>
            Использование центров коммутации, реализующих технологии коммутации,
            позволяет получить экономически оправданные решения для сетей связи
            любой емкости.
            <br></br>
            Центры коммутации организуют доступ большой группы пользователей к
            ограниченному количеству общих ресурсов, при помощи которых может
            быть построено ограниченное этим количеством число соединений.
            <br></br>
            Технологии коммутации логически сложны и их логика в части занятия и
            освобождения ресурсов РЕАЛИЗУЕТСЯ ПРОГРАММНЫМИ СРЕДСТВАМИ, в отличие
            от технологий передачи и мультиплексирования.
            <br></br>
            ПОСЛЕДСТВИЯ ИСПОЛЬЗОВАНИЯ ЦЕНТРОВ КОММУТАЦИИ ПРИ ПОСТРОЕНИИ СЕТИ:{" "}
            <br></br>
            1) сети большой емкости приобретают многоуровневую иерархическую
            структуру; <br></br>
            2) для выполнения функций занятия ресурсов сетевые центры должны
            получать адресную информа- цию о направлениях передачи данных. Эта
            служебная (управляющая) информация циркулирует в сети и «отнимает» у
            полезной информации сетевые ресурсы;
            <br></br>3) существует вероятность отказа или задержки передачи
            сообщений из-за перегрузки, поскольку пропускная способность сети
            меньше, чем количество данных, которое может быть одновременно
            заявлено для передачи информационными источниками.
          </p>
          <br></br>
          <p>
            <a name="k3" style={{ color: "red" }}>
              3. Иерархическая структура и нумерация телефонной сети общего
              пользования.
            </a>
            <br></br>
            Три уровня иерархии. Чем меньше емкость центров коммутации – тем
            больше уровней иерархии требуется для построения сети.
            <br></br>
            Принцип нумерации отражает иерархический принцип построения сети:
            <br></br>
            выход на АМТС 8 ~<br></br>
            код зоны 813<br></br>
            код города в зоне 75<br></br>
            номер телефона в городе
          </p>
          <br></br>
          <p>
            <a name="k4" style={{ color: "red" }}>
              4. Иерархическая структура пакетных сетей связи.
            </a>
            <br></br>
          </p>
          <br></br>
          <p>
            <a name="k5" style={{ color: "red" }}>
              5. Способы урегулирования коллизий на сетях связи.
            </a>
            <br></br>
            1) с потерями - отказ на обслуживание
            <br></br>
            2) с ожиданием - очередь на обслуживание<br></br>
            3) ограниченное время ожидания - заявка теряется при превышении
            времени ожидания
          </p>

          <br></br>
          <p>
            <a name="k6" style={{ color: "red" }}>
              6. Свойства коммутируемых соединений.
            </a>
            <br></br>К числу важных свойств коммутируемых соединений, которые
            устанавливаются центрами коммутации, относятся: <br></br>
            скорость передачи данных; <br></br>
            направление соединения – симплексные, дуплексные, другие; <br></br>
            топология соединения – точка-точка, точка-многоточка,
            многоточка-точка, многоточка-многоточка; <br></br>
            однородность соединения – технологические, энергетические,
            логические и другие <br></br>
            характеристики отдельных участков могут или не могу отличаться друг
            от друга; <br></br>
            информационная безопасность соединения – потребность в регистрации и
            хране- нии передаваемых управляющих и пользовательских данных и
            параметров соединений; <br></br>
            способ оплаты за соединение – плата за время существования
            соединения, за переданные данные, другое; <br></br>
            требования к информационной технологии – ручная,
            электромеханическая, <br></br>
            электронная, аналоговая, цифровая и другие технологии построения
            соединения; <br></br>
            представление передаваемой информации – есть или нет ограничения на
            формат передаваемых данных; <br></br>
            качество канала – вероятности отказа канала, искажения данных и
            другое; <br></br>
            чувствительность к перегрузкам – механизмы защиты от избыточного
            трафика. <br></br>
            Способность устанавливать соединения с затребованными пользователями
            свойствами и скоростями передачи данных – важная характеристика
            центра коммутации.
          </p>

          <br></br>
          <p>
            <a name="k7" style={{ color: "red" }}>
              7. Особенности услуг TriplePlay инфокоммуникационных
              мультисервисных сетей.
            </a>
            <br></br>
            Услуги TriplePlay инфокоммуникационных мультисервисных сетей связаны
            с доставкой речи, видео и данных и при предоставлении разных услуг
            обеспечивают разную скорость передачи данных за счет статистического
            уплотнения.
            <br></br>
            Для предоставления разных инфоуслуг требуется задействовать разные
            скорости. Важная задача – предоставить в распоряжение пользователя
            канал связи с нужной ему скоростью передачи.
          </p>

          <br></br>
          <p>
            <a name="k8" style={{ color: "red" }}>
              8. Классификация технологий коммутации. Коммутация каналов.
            </a>
            <br></br>
            Технологии коммутации призваны решить две задачи: <br></br>-
            распределить между пользователями (их сообщениями) имеющиеся
            канальные ресурсы сети связи; <br></br>- обеспечить требуемую
            скорость доставки данных между пользователями. <br></br>
            Внедрение той или иной технологии зависит от (1) информационного
            объема передаваемых сообщений и (2) объема каналов связи,
            образованных при мультиплексировании. <br></br>
            ТЕХНОЛОГИЯ КОММУТАЦИИ КАНАЛОВ. Если информационные объемы сообщений
            примерно равны объему каналов связи, то каналы целесообразно
            закреплять за сообщениями на все время соединения.
          </p>

          <br></br>
          <p>
            <a name="k9" style={{ color: "red" }}>
              9. Классификация технологий коммутации. Коммутация сообщений.
            </a>
            <br></br>
            ТЕХНОЛОГИЯ КОММУТАЦИИ СООБЩЕНИЙ. Если емкость каналов существенно
            больше емкости поступающих сообщений, то один канал целесообразно
            использовать для передачи большой группы сообщений.
          </p>

          <br></br>
          <p>
            <a name="k10" style={{ color: "red" }}>
              10. Классификация технологий коммутации. Коммутация пакетов.
            </a>
            <br></br>
            ТЕХНОЛОГИЯ КОММУТАЦИИ ПАКЕТОВ. Если объем сообщений имеет
            существенный разброс и может быть как больше, так и меньше объема
            каналов связи, то можно разделить каждое сообщение на относительно
            одинаковые блоки (пакеты) и передавать эти блоки по каналам связи
            независимо друг от друга.
          </p>

          <br></br>
          <p>
            <a name="k11" style={{ color: "red" }}>
              11. Проблемы, возникающие при объединении сетей, и способы их
              решения.
            </a>
            <br></br>
            ПРОБЛЕМА 1. Сети отличаются технологиями: видом сообщений, сигналов,
            линий связи, способами образования каналов при мультиплексировании,
            методами коммутации и др.
            <br></br>
            ПРОБЛЕМА 2. Сети управляются разными администрациями.
            <br></br>
            Путь 1. Построить все сети по одинаковой технологии. Это сделает их
            совместимыми. Так строятся телефонные сети.<br></br>
            Путь 2. Изменить сети только в том, что касается их входов и
            выходов. Внутренние сетевые технологии пусть выбирает местная
            администрация.
          </p>

          <br></br>
          <p>
            <a name="k12" style={{ color: "red" }}>
              12. Требования к технологиям объединения сетей.
            </a>
            <br></br>
            1) Экономия затрат при объединении сетей. При взаимодействии
            объединяемые сети должны использовать технологию коммутации пакетов
            и дейтаграммный режим без установления соединения (IP – Internet
            Protocol). Этот протокол стремится обеспечить качество доставки, но
            не несет ответственности за выбранные маршруты и порядок доставки,
            задержки и потерю пакетов, за информаци- онную безопасность
            пользователей.
            <br></br>2) Единые стандарты взаимодействия. Передача информации
            между объединенными сетями должна осуществляться при помощи блока
            данных стандартного формата (IP-пакет).<br></br>
            3) Единое адресное пространство. Система адресации должна
            обеспечивать уникальными именами (IP-адресами) каждую из
            взаимодействующих сетей. Адресация внутри отдельных сетей
            устанавливается местной администрацией.<br></br>
            4) Добровольность объединения. Любая сеть может быть подключена к
            объединенной сети только по инициативе своей администрации.<br></br>
            5) Совместимость внешних и внутренних данных для всех сетей.
            Объединяемые се- ти не должны обрабатывать IP-пакет, но должны при
            передаче внутренних данных обес- печивать и передачу IP-пакета.
            <br></br>6) Качество и безопасность?
          </p>

          <br></br>
          <p>
            <a name="k13" style={{ color: "red" }}>
              13. Способы реализации технологии коммутации каналами.
            </a>
            <br></br>
            Коммутация каналов предполагает закрепление за пользователями всех
            общесетевых ресурсов, необходимых для информационного
            взаимодействия, на все время взаимодействия.
            <br></br>В электромеханических сетях коммутация каналов реализуется
            в форме соединения электрических цепей для переноса энергии
            сигналов. <br></br>В цифровых сетях – в форме переноса данных об
            энергии сигнала в дискретные моменты во временных слотах.
          </p>

          <br></br>
          <p>
            <a name="k14" style={{ color: "red" }}>
              14. Принципы построения ручных телефонных станций.
            </a>
            <br></br>
            Абонентские линии подключены к гнездам многократного поля
            коммутаторов. Телефонистки при помощи токопроводя- щих шнуров со
            штепселями на концах соединяют гнезда для передачи сигналов
            электросвязи в форме электрического тока, модулированного телефонами
            пользователей.
          </p>

          <br></br>
          <p>
            <a name="k15" style={{ color: "red" }}>
              15. Принцип коммутации с непосредственным управлением процессом
              соединения. Что такое искатель?
            </a>
            <br></br>- электромеханический коммутационный аппарат, применяемый в
            системах коммутации, автоматизации и управления технологическими
            процессами.
          </p>

          <br></br>
          <p>
            <a name="k16" style={{ color: "red" }}>
              16. Принцип регистрового управления. Назначение регистра.
            </a>
            <br></br>
            Машинные системы также построены на основе искателей, однако
            отличаются наличием общих управляющих устройств - регистров Они
            предназначены для приема номера вызываемого абонента, хранения,
            переработки и передачи этого номера в управляющие устройства
            искателей.
          </p>

          <br></br>
          <p>
            <a name="k17" style={{ color: "red" }}>
              17. Принцип регистрово-маркерного управления. Назначение маркера.
            </a>
            <br></br>В координатных системах коммутационное поле состоит из
            многозвенных блоков коммутации, имеющих несколько входов и выходов и
            управляемых коллективным управляющим устройством – маркером. Чем
            выше скорость работы маркера, тем большей емкости может быть
            коммутационный блок, которым он управляет. При недостаточной
            скорости маркера могут возникать задержки установления соединений в
            пределах блока.
          </p>

          <br></br>
          <p>
            <a name="k18" style={{ color: "red" }}>
              18. Принцип построения многозвенных коммутационных схем.
            </a>
            <br></br>-
          </p>

          <br></br>
          <p>
            <a name="k19" style={{ color: "red" }}>
              19. Принцип построения центров коммутации с программным
              управлением на базе специализированной ЭВМ.
            </a>
            <br></br>-
          </p>

          <br></br>
          <p>
            <a name="k20" style={{ color: "red" }}>
              20. Особенности аналоговых и цифровых центров коммутации каналов.
            </a>
            <br></br>
            Сети связи, использующие аналоговые АТС получили название телефонных
            сетей общего пользования. ТФОП используют для передачи:<br></br>-
            информации пользователя – канал тональной частоты в спектре 0,3-3,4
            КГц;<br></br>- сигналов сигнализации – посылки постоянного тока или
            переменного тока в спектре 0,3-3,4 КГц.<br></br>
            Сети связи, использующие такие узлы коммутации, получили название
            цифровых сетей интегрального обслуживания.
          </p>

          <br></br>
          <p>
            <a name="k21" style={{ color: "red" }}>
              21. Особенности синхронного и асинхронного режимов передачи
              данных.
            </a>
            <br></br>
            СРП характеризуется: постоянной скоростью передачи, циклической
            структурой сигналов и поддержкой постоянного соединения. Трафик
            сетей с СРП создают услуги реального времени – телефония, звуковое
            вещание и др. Этот режим дол- жен удовлетворять жестким требованиям
            к сетевой синхронизации.
            <br></br>
            АРП характеризуется передачей информационных блоков, имеющих
            фиксированную структуру и, вообще говоря, переменный размер. Для
            идентификации блока необходимо формировать его служебные поля.
            Трафик сетей с АРП может не удовлетворять требованиям реального
            времени. В режиме АРП работают локальные и глобальные сети
            коммутации пакетов.
          </p>
          <br></br>
          <p>
            <a name="k22" style={{ color: "red" }}>
              22. Пространственная, временная и пространственно-временная
              коммутация каналов.
            </a>
            <br></br>
            При временной коммутации необходимо перенести данные из одного слота
            (временного положения) в другой.
            <br></br>
            Пространственная коммутация заключается в переносе информации из
            одного цифрового тракта в другой без изменения слота.
            <br></br>
            На практике применяют многозвенные пространственно-временные блоки
            коммутации, когда перенос информации проводится одновременно и в
            другой тракт и в другой слот.
            <br></br>Они могут быть описаны сочетанием коммутаторов,
            используемых при аналоговой коммутации.
          </p>
          <br></br>
          <p>
            <a name="k23" style={{ color: "red" }}>
              23. Принципы построения центров коммутации.
            </a>
            <br></br>
            Сетевой центр коммутации реализует процессы коммутации и состоит из
            исполнительной и управляющей систем: <br></br>
            исполнительная система обеспечивает реализацию телекоммуникационных
            процессов передачи, мультиплексирования и коммутации. К числу ее
            компонент относятся каналы и линии связи, оборудование коммутации,
            разнообразные элементы, согласующие энергетические параметры
            сигналов и т.п.;
            <br></br>управляющая система обрабатывает управляющую информацию и
            вырабатывает команды, в соответствии с которыми
            занимаются/освобождаются элементы исполнительной системы. Ее
            компонентами являются программы управления, компьютеры, реализующие
            эти программы, средства взаимодействия этих компьютеров и т.п.
          </p>
          <br></br>
          <p>
            <a name="k24" style={{ color: "red" }}>
              24. Способы построения многопроцессорных управляющих систем
              центров коммутации.
            </a>
            <br></br>-
          </p>
          <br></br>
          <p>
            <a name="k25" style={{ color: "red" }}>
              25. Узел коммутации типа DX-200.
            </a>
            <br></br>
            Коммутационное поле содержит два типа блоков коммутации SSW и GSW, в
            которые включены абонентские модули SUB и служебные комплекты
            (комплекты АОН и конференц-связи, генераторы тональных частот,
            линейные комплекты, многочастотные приемо-передатчики и приемники
            сигна- лов тонального набора).
          </p>
          <br></br>
          <p>
            <a name="k26" style={{ color: "red" }}>
              26. Узел коммутации типа Аlcatel 1000S12.
            </a>
            <br></br>
            Основой конфигурации системы является ЦКП, которое используется для
            коммутации как инфор- мации пользователей, так и сообщений между УУ.
            К ЦКП подключаются терминальные (ТМ) и системные (СМ) модули,
            имеющие собственное УУ, комплект программного обеспечения и стан-
            дартизованный аппаратно-программный интерфейс для связи с другими
            модулями. ТМ содержат оконечное оборудование, предназначенное для
            взаимодействия с источниками нагрузки, и осуще- ствляют управление
            установлением соединений в ЦКП. СМ не имеют оконечного терминального
            оборудования и выполняют функции, общие для группы однотипных
            терминальных модулей или для всего центра.
          </p>

          <br></br>
          <p>
            <a name="k27" style={{ color: "red" }}>
              27. Узел коммутации типа 5ESS-2000.
            </a>
            <br></br>-
          </p>

          <br></br>
          <p>
            <a name="k28" style={{ color: "red" }}>
              28. Эволюция архитектур сетевых центров.
            </a>
            <br></br>
          </p>

          <br></br>
          <p>
            <a name="k29" style={{ color: "red" }}>
              29. Особенности технологии коммутации сообщений.
            </a>
            <br></br>
            не предполагает закрепления за пользователем канальных ресурсов,
            поскольку информационная емкость сообщений меньше, чем емкость
            каналов связи. <br></br>
            Пришедшее на центр коммутации сообщение должно сопровождаться
            адресной информацией и сначала сохраняется в специальной памяти, и
            лишь затем, после определения направления связи, ставится в очередь.
            Передача осуществляется после того, как будет сформирована группа из
            нескольких сообщений, совместная емкость которых соответствует
            емкости каналов связи.
            <br></br>Передача сообщения, таким образом, осуществляется не в ре-
            альном масштабе времени, а по мере поступления других сообщений и
            освобождения каналов.
            <br></br>Технология коммутации сообщений была разработана для
            почтовых и телеграфных сетей.
          </p>

          <br></br>
          <p>
            <a name="k30" style={{ color: "red" }}>
              30. Принципы построения службы коротких сообщений.
            </a>
            <br></br>
            SMS-сообщение, используя те же сетевые ресурсы, что и голосовой
            сигнал, по каналам связи и центры коммутации доставляется до центра
            обработки SMS-сообщений, а затем в обратном направлении до терминала
            получателя.
          </p>

          <br></br>
          <p>
            <a name="k31" style={{ color: "red" }}>
              31. Особенности технологии коммутации пакетов. Модель формирования
              блоков данных.
            </a>
            <br></br>
            При коммутации пакетов сообщение, подлежащее передаче: <br></br>
            1) разбивается на части (блоки данных) одинаковой или разной длины;{" "}
            <br></br>
            2) к каждому блоку данных прикрепляется адресная и другая служебная
            (управляющая) информация, позволяющая установить принадлежность
            блока к одному и тому же сообщению и место блока внутри разделенного
            сообщения;
            <br></br>3) передача блоков данных происходит по технологии
            коммутации сообщений и в общем случае может осуществляться через
            разные соединения (каналы связи). <br></br>
            4) после поступления блоков данных на приемную сторону сообщение
            восстанавливает- ся и передается адресату.
          </p>

          <br></br>
          <p>
            <a name="k32" style={{ color: "red" }}>
              32. Дейтаграммный режим коммутации пакетов.
            </a>
            <br></br>
            Дейтаграммный способ передачи данных основан на том, что все
            передаваемые пакеты обрабатываются независимо друг от друга. Выбор
            интерфейса, на который надо передать поступивший пакет, происходит
            только на основании адреса назначения, содержащегося в заголовке
            пакета. Принадлежность пакета к определенному информационному потоку
            никак не учитывается.
          </p>

          <br></br>
          <p>
            <a name="k33" style={{ color: "red" }}>
              33. Коммутация пакетов в режиме виртуального соединения.
            </a>
            <br></br>
            Виртуальные каналы – это устойчивые пути следования пакетов. Для
            того чтобы выделить поток данных из общего трафика, каждый пакет
            этого потока помечается меткой. Прокладка виртуального канала
            начинается с отправки из узла-источника запроса. В запросе
            указывается адрес назначения и метка потока, для которого
            прокладывается этот виртуальный канал. Запрос, проходя по сети,
            формирует новую запись в каждом из коммутаторов, расположенных на
            пути от отправителя до получателя.
          </p>

          <br></br>
          <p>
            <a name="k34" style={{ color: "red" }}>
              34. Эволюция технологий коммутации. Быстрая и многоскоростная
              коммутация каналов.
            </a>
            <br></br>В системах с многоскоростной коммутацией каналов за одним
            соединением может одновременно закрепляться несколько цифровых
            каналов, что позволяет изменять скорость переноса. Основная проблема
            – это сложность синхронизации компонент информационного потока,
            передаваемых по разным каналам
            <br></br>
            При быстрой коммутации каналов ресурсы в сети занимаются только на
            время передачи информации. Основная трудность заключается в
            реализации управляющей системы, которая должна устанавливать и
            разъединять соединения между пользователями за очень короткий
            интервал времени
          </p>

          <br></br>
          <p>
            <a name="k35" style={{ color: "red" }}>
              35. Эволюция технологий коммутации. Быстрая коммутация пакетов.
              IP/MPLS.
            </a>
            <br></br>
            Главное достоинство ATM и IP/MPLS – это возможность поддержки любых
            инфоуслуг независимо от требуемой им скорости передачи данных.
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Основы интернета вещей">
        <Div>
          <p>
            <a name="i1" style={{ color: "red" }}>
              1. Что такое интернет. Этапы развития и будущее интернет.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="i2" style={{ color: "red" }}>
              2. Что такое интернет вещей? Стандартизация интернета вещей МСЭ-Т.
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="i3" style={{ color: "red" }}>
              3. Сегменты интернета вещей. Индустриальный интернет.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="i4" style={{ color: "red" }}>
              4. Умные вещи как новый тип терминальных устройств.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="i5" style={{ color: "red" }}>
              5. Эволюция вещей.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="i6" style={{ color: "red" }}>
              6. Базовые технологии интернета вещей.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="i7" style={{ color: "red" }}>
              7. Идентификация в интернете вещей.
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="i8" style={{ color: "red" }}>
              8. Всепроникающие сенсорные сети.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="i9" style={{ color: "red" }}>
              9. Динамика увеличения количества и распределения по Земле умных
              вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i10" style={{ color: "red" }}>
              10. Общая характеристика технологий M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i11" style={{ color: "red" }}>
              11. Статистика соединений M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i12" style={{ color: "red" }}>
              12. Интернет вещей как следующий этап развития технологий M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i13" style={{ color: "red" }}>
              13. Организация соединений M2M в интернете вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i14" style={{ color: "red" }}>
              14. Общая характеристика чипов для интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i15" style={{ color: "red" }}>
              15. Что такое туманные вычисления?
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i16" style={{ color: "red" }}>
              16. Прогнозы развития мирового рынка интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i17" style={{ color: "red" }}>
              17. Эталонные модели интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i18" style={{ color: "red" }}>
              18. Уровневая организация интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i19" style={{ color: "red" }}>
              19. Интернет вещей как сеть сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i20" style={{ color: "red" }}>
              20. Дополненная реальность.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Идентификация в интернете вещей">
        <Div>
          <p>
            <a name="id1" style={{ color: "red" }}>
              1. Классификация технологии интернета вещей.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="id2" style={{ color: "red" }}>
              2. Что такое радиочастотная идентификация. Области применения.
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="id3" style={{ color: "red" }}>
              3. Технологии, реализованные в RFID системах
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="id4" style={{ color: "red" }}>
              4. Преимущества и недостатки радиочастотной идентификации.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="id5" style={{ color: "red" }}>
              5. Классификация RFID меток.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="id6" style={{ color: "red" }}>
              6. Пассивные метки с чипом.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="id7" style={{ color: "red" }}>
              7. Активные метки с чипом.
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="id8" style={{ color: "red" }}>
              8. Стандарты ISO в области RFID .
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="id9" style={{ color: "red" }}>
              9. Стандарты EPC Global. Функциональные группы меток.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id10" style={{ color: "red" }}>
              10. Структура памяти метки стандарта Gen2.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id11" style={{ color: "red" }}>
              11. Физические основы построения меток без чипа.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id12" style={{ color: "red" }}>
              12. RFID метка на ПАВ с отражающими элементами.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id13" style={{ color: "red" }}>
              13. Сравнение меток, построенных на разных технологиях.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id14" style={{ color: "red" }}>
              14. Коллизии и классификация алгоритмов антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id15" style={{ color: "red" }}>
              15. Случайные алгоритмы антиколлизии. Алгоритм АЛОХА и его
              модификации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id16" style={{ color: "red" }}>
              16. Случайные алгоритмы антиколлизии. Алгоритм стандарта Gen2.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id17" style={{ color: "red" }}>
              17. Детерминированные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id18" style={{ color: "red" }}>
              18. Пространственные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id19" style={{ color: "red" }}>
              19. Корреляционные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id20" style={{ color: "red" }}>
              20. Кибербезопасность RFID систем.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Особенности сетей / Сенсорные сети">
        <Div>
          <p>
            <a name="o1" style={{ color: "red" }}>
              1. Классификация технологий интернета вещей.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="o2" style={{ color: "red" }}>
              2. Классификация характеристик инфокоммуникационных сетей?
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="o3" style={{ color: "red" }}>
              3. Пространственные характеристики инфокоммуникаций.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="o4" style={{ color: "red" }}>
              4. Временные характеристики инфокоммуникаций.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="o5" style={{ color: "red" }}>
              5. Особенности инфраструктурных и сенсорных сетей.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="o6" style={{ color: "red" }}>
              6. Пространственные характеристики и модели сенсорных сетей.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="o7" style={{ color: "red" }}>
              7. Временные характеристики и стандарты сенсорных сетей.
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="o8" style={{ color: "red" }}>
              8. Энергетические характеристики сенсорных сетей. Профиль
              энергопотребления умной вещи.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="o9" style={{ color: "red" }}>
              9. Системные методы повышения энергоэффективности сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o10" style={{ color: "red" }}>
              10. Связность сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o11" style={{ color: "red" }}>
              11. Показатели связности.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o12" style={{ color: "red" }}>
              12. Зависимость пространственных, временных и энергетических
              характеристик.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o13" style={{ color: "red" }}>
              13. Сравнение P2P и сенсорных сетей?
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o14" style={{ color: "red" }}>
              14. Самоорганизация сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Эталонные модели интернета вещей">
        <Div>
          <p>
            <a name="e1" style={{ color: "red" }}>
              1. Классификация устройств интернета вещей.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="e2" style={{ color: "red" }}>
              2. Взаимосвязь Устройств и физических вещей (МСЭ-T Y.2060)
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="e3" style={{ color: "red" }}>
              3. Взаимодействие Устройств интернета вещей
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="e4" style={{ color: "red" }}>
              4. Общие требования к интернету вещей
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="e5" style={{ color: "red" }}>
              5. Общий принцип построения многоуровневых моделей при
              стандартизации взаимодействия открытых систем
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="e6" style={{ color: "red" }}>
              6. Эталонная модель интернета вещей МСЭ-Т. Возможности 3-го и 4-го
              уровней.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="e7" style={{ color: "red" }}>
              7. Эталонная модель интернета вещей МСЭ-Т. Возможности 1-го и 2-го
              уровней.
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="e8" style={{ color: "red" }}>
              8. Эталонная модель интернета вещей МСЭ-Т. Возможности управления
              и обеспечения безопасности.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="e9" style={{ color: "red" }}>
              9. Экосистема интернета вещей
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e10" style={{ color: "red" }}>
              10. Бизнес-модели интернета вещей
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e11" style={{ color: "red" }}>
              11. Эталонная модель всемирного форума интернета вещей IWF.
              Предназначение модели.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e12" style={{ color: "red" }}>
              12. Характеристика 1-3 Уровней Эталонной модели IWF
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e13" style={{ color: "red" }}>
              13. Характеристика 4-7 Уровней Эталонной модели IWF
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие / Протоколы">
        <Div>
          <p>
            <a name="p1" style={{ color: "red" }}>
              1. Общий принцип построения многоуровневых моделей при
              стандартизации взаимодействия открытых систем.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="p2" style={{ color: "red" }}>
              2. Эталонная модель интернета вещей (МСЭ-T Y.2060)
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="p3" style={{ color: "red" }}>
              3. Общая характеристика стандартов IEEE 802.x.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="p4" style={{ color: "red" }}>
              4. Физический и канальный уровни IEEE 802.x.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="p5" style={{ color: "red" }}>
              5. Технологии расширения спектра сигнала.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="p6" style={{ color: "red" }}>
              6. Что такое модуляция, манипуляция, спектр сигнала?
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="p7" style={{ color: "red" }}>
              7. Основы частотной модуляции FSK (frequency shift key).
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="p8" style={{ color: "red" }}>
              8. Основы аналоговой модуляции по амплитуде и фазе.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="p9" style={{ color: "red" }}>
              9. Векторные диаграммы манипуляций BPSK и OQPSK.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p10" style={{ color: "red" }}>
              10. Стандарт ieee 802.15.4. Физический уровень.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p11" style={{ color: "red" }}>
              11. Стандарт ieee 802.15.4. Подуровень MAC.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p12" style={{ color: "red" }}>
              12. Основы протокола множественного доступа CSMA-CA.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p13" style={{ color: "red" }}>
              13. Основные понятия технологий маршрутизации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p14" style={{ color: "red" }}>
              14. Базовые топологии сетей стандарта ieee 802.15.4.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p15" style={{ color: "red" }}>
              15. Классификация протоколов маршрутизации сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p16" style={{ color: "red" }}>
              16. Открытые полосы частот согласно решения ГКРЧ.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p17" style={{ color: "red" }}>
              17. Общая характеристика диапазона LPD 433.075 -434.750 МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p18" style={{ color: "red" }}>
              18. Общая характеристика диапазона PMR 446.00625 - 446.09375 МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p19" style={{ color: "red" }}>
              19. Общая характеристика диапазона 868,7-869,2 МГц МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p20" style={{ color: "red" }}>
              20. Общая характеристика диапазона 2,4 ГГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p21" style={{ color: "red" }}>
              21. Общая характеристика диапазона 5 – 6 ГГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие / Технологии">
        <Div>
          <p>
            <a name="tt1" style={{ color: "red" }}>
              1. Стандарты IEEE 802.x.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="tt2" style={{ color: "red" }}>
              2. Эфирные сети стандарта IEEE 802.x
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="tt3" style={{ color: "red" }}>
              3. Стандарт IEEE 802.15.4. Физический уровень.5. Базовые топологии
              сетей стандарта IEEE 802.15.4.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="tt4" style={{ color: "red" }}>
              4. Технология ZigBee.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="tt5" style={{ color: "red" }}>
              5. Технология Bluetooth стандарта IEEE 802.15.1. Версия 2.0 + EDR.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="tt6" style={{ color: "red" }}>
              6. Разделение каналов в технологии Bluetooth.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="tt7" style={{ color: "red" }}>
              7. Образование piconet и scatternet в технологии Bluetooth.
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="tt8" style={{ color: "red" }}>
              8. Технология Bluetooth стандарта IEEE 802.15.1. Версия 5.0.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="tt9" style={{ color: "red" }}>
              9. Технология WI-FI стандарта IEEE 802.11n.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt10" style={{ color: "red" }}>
              10. Основы технологии MIMO.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt11" style={{ color: "red" }}>
              11. Эфирные сети для города и сельской местности WIMAX и White
              Space .
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt12" style={{ color: "red" }}>
              12. Основные понятия технологий маршрутизации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt13" style={{ color: "red" }}>
              14. Предпосылки создания протоколов маршрутизации для сенсорных
              сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt14" style={{ color: "red" }}>
              14. Предпосылки создания протоколов маршрутизации для сенсорных
              сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt15" style={{ color: "red" }}>
              15. Протокол AODV (Ad hoc On Demand Distance Vector).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt16" style={{ color: "red" }}>
              16. Протокол LEACH (Low-Energy Adaptive Clustering Hierarchy).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt17" style={{ color: "red" }}>
              17. Протокол PEGASIS (Power-Efficient Gathering in Sensor
              Information System).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt18" style={{ color: "red" }}>
              18. Протоколы Hierarchical (иерархический) PEGASIS и BCDCP
              (Base-Station Controlled Dynamic Clustering Protocol).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt19" style={{ color: "red" }}>
              19. Технологии и дальнего радиуса действия для IoT (LPWAN -
              Low-Power Wide-Area Network).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt20" style={{ color: "red" }}>
              20. Технология LoRaWAN.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt21" style={{ color: "red" }}>
              21. Технология «СТРИЖ».
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Button></Button>
      <Button
        size="xl"
        style={{ position: "fixed", left: "0", bottom: "0", zIndex: "124" }}
      >
        <a href="#top">Наверх</a>
      </Button>
    </Panel>
  );
};

Lab.propTypes = {
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

export default Lab;
