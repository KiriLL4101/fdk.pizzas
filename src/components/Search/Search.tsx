import React from "react";

import SearchIcon from "icon:../../assets/img/search.svg";
import RemoveIcon from "icon:../../assets/img/remove.svg";

import * as styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const onClickClear = () => {
    setValue("");
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <RemoveIcon onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  );
};

export default Search;
