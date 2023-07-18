// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { itemsOperations, itemsSelectors } from "redux/items";
import Title from "components/common/Title/Title";
// import {
//   ItemsPageList,
//   ItemsPageItem,
//   ItemsPageText,
//   ItemsPageIconDelete,
// } from "./ItemsPage.styled";

export const ItemsPage = () => {
  // const dispatch = useDispatch();
  // const items = useSelector(itemsSelectors.selectItems);

  // useEffect(() => {
  //   dispatch(itemsOperations.fetchItems());
  // }, [dispatch]);

  // const handleDeleteItem = (id) => {
  //   console.log("id", id);
  //   dispatch(itemsOperations.deleteItem(id));
  // };

  return (
    <>
      <Title title="Items Page" />
      {/* <ItemsPageList>
        {items.map(({ id, title }) => (
          <ItemsPageItem key={id}>
            <ItemsPageText>{title}</ItemsPageText>
            <button onClick={() => handleDeleteItem(id)}>
              <ItemsPageIconDelete size={30} />
            </button>
          </ItemsPageItem>
        ))}
      </ItemsPageList> */}
    </>
  );
};
