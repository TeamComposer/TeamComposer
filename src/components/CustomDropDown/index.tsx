import React from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const CustomDropDown = ({ data = [], placeholder, setSelected }) => {
  const [selectedLocal, setSelectedLocal] = React.useState("");

  const dataLocal =
    data.length > 0
      ? data
      : [
          { key: "0", value: "Nenhum" },
          { key: "1", value: "Júnior" },
          { key: "2", value: "Pleno" },
          { key: "3", value: "Sênior" },
        ];

  return (
    <View style={{ marginBottom: 8 }}>
      <SelectList
        onSelect={() => {
          setSelectedLocal(selectedLocal)
          setSelected(selectedLocal)
        }}
        setSelected={setSelectedLocal}
        data={dataLocal}
        search={false}
        placeholder={placeholder}
        inputStyles={{ color: "white", fontWeight: "bold", fontSize: 16 }}
        dropdownTextStyles={{
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
        }}
        dropdownStyles={{ backgroundColor: "#2C4060" }}
      />
    </View>
  );
};

export default CustomDropDown;
