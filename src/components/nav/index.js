import ReactDOM from "react-dom";
import React, { memo, useState } from "react";
import { useSpring, a } from "react-spring";
import { Link } from "react-router-dom";
import { useMeasure, usePrevious } from "./helpers";
import { Frame, Title, Content, toggle } from "./styles";
import * as Icons from "./icons";

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

const Nav = () => (
  <>
    <Tree name="Reference" defaultOpen>
      <Tree name="React Router">
        <Link to="/react-router/basic">
          <Tree name="basic" />
        </Link>
        <Link to="/react-router/animated-transitions">
          <Tree name="Animated Transitions" />
        </Link>
        <Link to="/react-router/custom-link">
          <Tree name="Custom Link" />
        </Link>
        <Link to="/react-router/nesting">
          <Tree name="Nesting" />
        </Link>
        <Link to="/react-router/no-match-404">
          <Tree name="No Match 404" />
        </Link>
        <Link to="/react-router/preventing-transitions">
          <Tree name="Preventing Transitions" />
        </Link>
        <Link to="/react-router/query-parameters">
          <Tree name="Query Parameters" />
        </Link>
        <Link to="/react-router/redirects">
          <Tree name="Redirects" />
        </Link>
        <Link to="/react-router/route-config">
          <Tree name="Route Config" />
        </Link>
        <Link to="/react-router/sidebar">
          <Tree name="Sidebar" />
        </Link>
        <Link to="/react-router/url-parameters">
          <Tree name="URL Parameters" />
        </Link>
      </Tree>
      <Tree name="React Spring">
        <Link to="/react-spring/animating-auto">
          <Tree name="AnimatingAuto" />
        </Link>
        <Link to="/react-spring/3d-card">
          <Tree name="Card3d" />
        </Link>
        <Link to="/react-spring/card-stack">
          <Tree name="CardStack" />
        </Link>
        <Link to="/react-spring/draggable-list">
          <Tree name="DraggableList" />
        </Link>
        <Link to="/react-spring/emulating-css-keyframes">
          <Tree name="EmulatingCSSKeyframes" />
        </Link>
        <Link to="/react-spring/flip-card">
          <Tree name="FlipCard" />
        </Link>
        <Link to="/react-spring/gestures">
          <Tree name="Gestures" />
        </Link>
        <Link to="/react-spring/gesture-slider">
          <Tree name="GestureSlider" />
        </Link>
        <Link to="/react-spring/goo-blob">
          <Tree name="GooBlob" />
        </Link>
        <Link to="/react-spring/image-fade">
          <Tree name="ImageFade" />
        </Link>
        <Link to="/react-spring/list-reordering">
          <Tree name="ListReordering" />
        </Link>
        <Link to="/react-spring/masonry-grid">
          <Tree name="MasonryGrid" />
        </Link>
        <Link to="/react-spring/mouse-parallax">
          <Tree name="MouseParallax" />
        </Link>
        <Link to="/react-spring/multistage-transition">
          <Tree name="MultistageTransition" />
        </Link>
        <Link to="/react-spring/notification-hub">
          <Tree name="NotificationHub" />
        </Link>
        <Link to="/react-spring/scroll-parallax">
          <Tree name="ScrollParallax" />
        </Link>
        <Link to="/react-spring/simple-transition">
          <Tree name="SimpleTransition" />
        </Link>
        <Link to="/react-spring/spring-reset-script">
          <Tree name="SpringResetScript" />
        </Link>
        <Link to="/react-spring/spring-scripting">
          <Tree name="SpringScripting" />
        </Link>
        <Link to="/react-spring/svg-filter">
          <Tree name="SVGFilter" />
        </Link>
        <Link to="/react-spring/trails">
          <Tree name="Trails" />
        </Link>
        <Link to="/react-spring/treeview">
          <Tree name="Treeview" />
        </Link>
        <Link to="/react-spring/view-pager">
          <Tree name="ViewPager" />
        </Link>
      </Tree>

      <Tree name="Hooks">
        <Link to="/hooks/use-state">
          <Tree name="useState" />
        </Link>
        <Link to="/hooks/use-effect">
          <Tree name="useEffect" />
        </Link>
        <Link to="/hooks/use-context">
          <Tree name="useContext" />
        </Link>
        <Link to="/hooks/use-ref">
          <Tree name="useRef" />
        </Link>
        <Link to="/hooks/use-reducer">
          <Tree name="useReducer" />
        </Link>
        <Link to="/hooks/use-memo">
          <Tree name="useMemo" />
        </Link>
        <Link to="/hooks/custom-hooks">
          <Tree name="Custom Hooks" />
        </Link>
      </Tree>

      <Tree name="Context">
        <Link to="/context/create-context">
          <Tree name="createContext" />
        </Link>
        <Link to="/context/use-context">
          <Tree name="useContext" />
        </Link>
      </Tree>

      <Tree name="Fetch Data">
        <Link to="/fetch-data/fetch">
          <Tree name="Fetch" />
        </Link>
        <Link to="/fetch-data/axios">
          <Tree name="Axios" />
        </Link>
      </Tree>

      <Tree name="Forms">
        <Link to="/forms/on-change">
          <Tree name="onChange" />
        </Link>
        <Link to="/forms/on-submit">
          <Tree name="onSubmit" />
        </Link>
      </Tree>

      <Tree name={<span>🙀 something something</span>} />
    </Tree>
  </>
);

export default Nav;
