import React from "react";
import { FloatingAction } from "react-native-floating-action";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onPress: () => void;
  visible: boolean;
}>;

export default function FloatingActionButton({ onPress, visible }: Props) {
  const [state, setState] = React.useState(false);
  const [action, setAction] = React.useState(false);
  const actions = [
    {
      text: "Consignacion",
      icon: require("/home/jorge/Documents/myapp/assets/icons/plus-icon.png"),
      name: "plus",
      position: 2,
      color: "#0041c4ff",
    },
    {
      text: "Compra",
      icon: require("/home/jorge/Documents/myapp/assets/icons/minus-icon.png"),
      name: "close",
      position: 1,
      color: "#0041c4ff",
    },
  ];
  const closeIcon = require("/home/jorge/Documents/myapp/assets/icons/open-icon.png");
  const openIcon = require("/home/jorge/Documents/myapp/assets/icons/close-icon.png");
  const shadow = {
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#000000",
    shadowRadius: 1,
  };
  return (
    <FloatingAction
      actions={actions}
      visible={visible}
      floatingIcon={state ? closeIcon : openIcon}
      showBackground={true}
      shadow={shadow}
      onPressItem={onPress}
      color="#0041c4ff"
      iconHeight={23}
      iconWidth={23}
      onStateChange={() => setState(!state)}
    />
  );
}
