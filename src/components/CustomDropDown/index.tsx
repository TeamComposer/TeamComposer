import React from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const CustomDropDown = ({ data = [], placeholder }) => {
  const [selected, setSelected] = React.useState("");

  const dataLocal =
    data.length > 0
      ? data
      : [
          { key: "1", value: "Nenhum" },
          { key: "2", value: "Júnior" },
          { key: "3", value: "Pleno" },
          { key: "4", value: "Sênior" },
        ];

  return (
   <View style={{marginBottom: 8}}>
     <SelectList
      onSelect={() => alert(selected)}
      setSelected={setSelected}
      data={dataLocal}
      search={false}
      placeholder={placeholder}
      inputStyles={{ color: "white", fontWeight: "bold" }}
      dropdownTextStyles={{ color: "white", fontWeight: "bold" }}
      dropdownStyles={{ backgroundColor: "#2C4060" }}
    />
   </View>
  );
};

export default CustomDropDown;
