import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>
        <Text className="text-green-base">
          Olá mundo
        </Text>
        <Text variant="body-md-bold">
          Olá mundo
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base"/>
        <Icon svg={CheckIcon}/>
        <Icon svg={PencilIcon}/>
        <Icon svg={PlusIcon}/>
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={XIcon}/>
      </div>
    </div>
  )
}
