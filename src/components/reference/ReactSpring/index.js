import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import AnimatingAuto from "./AnimatingAuto/index";
import Card3d from "./Card3d/index";
// import CardStack from "./CardStack/index";
// import DraggableList from "./DraggableList/index";
import EmulatingCSSKeyframes from "./EmulatingCSSKeyframes/index";
import FlipCard from "./FlipCard/index";
import Gestures from "./Gestures/index";
import GestureSlider from "./GestureSlider/index";
import GooBlob from "./GooBlob/index";
import ImageFade from "./ImageFade/index";
import ListReordering from "./ListReordering/index";
import MasonryGrid from "./MasonryGrid/index";
import MouseParallax from "./MouseParallax/index";
import MultistageTransition from "./MultistageTransition/index";
// import NotificationHub from "./NotificationHub/index";
// import ScrollParallax from "./ScrollParallax/index";
import SimpleTransition from "./SimpleTransition/index";
// import SpringResetScript from "./SpringResetScript/index";
// import SpringScripting from "./SpringScripting/index";
import SVGFilter from "./SVGFilter/index";
import Trails from "./Trails/index";
import Treeview from "./Treeview/index";
import ViewPager from "./ViewPager/index";

export default function ReactSpring() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="react-spring/3d-card">3d Card</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div className="content-box">
      <h3>{topicId}</h3>
      {topicId === "3d-card" && <Card3d />}
      {topicId === "animating-auto" && <AnimatingAuto />}
      {/* {topicId === "card-stack" && <CardStack />} */}
      {/* {topicId === "draggable-list" && (
        <DraggableList items={"Lorem ipsum dolor sit".split(" ")} />
      )} */}
      {topicId === "emulating-css-keyframes" && <EmulatingCSSKeyframes />}
      {topicId === "flip-card" && <FlipCard />}
      {topicId === "gestures" && <Gestures />}
      {topicId === "gesture-slider" && <GestureSlider>Slide.</GestureSlider>}
      {topicId === "goo-blob" && <GooBlob />}
      {topicId === "image-fade" && <ImageFade />}
      {topicId === "list-reordering" && <ListReordering />}
      {topicId === "masonry-grid" && <MasonryGrid />}
      {topicId === "mouse-parallax" && <MouseParallax />}
      {topicId === "multistage-transition" && <MultistageTransition />}
      {/* {topicId === "notification-hub" && <NotificationHub />} */}
      {topicId === "scroll-parallax" && <ScrollParallax />}
      {topicId === "simple-transition" && <SimpleTransition />}
      {topicId === "spring-reset-script" && <SpringResetScript />}
      {topicId === "spring-scripting" && <SpringScripting />}
      {topicId === "svg-filter" && <SVGFilter />}
      {topicId === "trails" && <Trails />}
      {topicId === "treeview" && <Treeview />}
      {topicId === "view-pager" && <ViewPager />}
    </div>
  );
}
