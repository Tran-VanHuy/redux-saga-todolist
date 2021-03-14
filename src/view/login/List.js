import { debounce } from "@redux-saga/core/effects";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addProductSuccess,
  deleteProducts,
  getProducts,
  getProductSuccess,
  putProducts,
  putProductsData,
  sortProducts,
} from "./actions";

const List = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [changeVersion, setChangVersion] = useState(true);
  const [id, setId] = useState();
  const listSelecter = useSelector((state) => state.listReducer.list);
  const isLoading = useSelector((state) => state.listReducer.isLoading);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onGetList = (e) => {
    e.preventDefault();
  };

  const getPro = () => {
    dispatch(getProducts());
  };
  const onAddSubmit = (e) => {
    e.preventDefault();
    if (title && price && content) {
      const add = { title, price, content };

      if (changeVersion === true) {
        dispatch(addProduct(add, getPro));
        debounce(dispatch(getProducts()), 2000);
      } else {
        dispatch(putProducts(id, add, getPro));
        dispatch(getProducts());
        debounce(dispatch(getProducts()), 2000);
      }
    } else {
      alert("vui lòng nhập thông tin");
    }
  };

  const onDeleteProducts = (id) => {
    dispatch(deleteProducts(id, getPro));
  };

  const onPutProducts = (id, item) => {
    setChangVersion(false);
    setId(id);
    setTitle(item.title);
    setPrice(item.price);
    setContent(item.content);
  };

  const onChangeVersion = () => {
    setChangVersion(true);
    setPrice("");
    setTitle("");
    setContent("");
  };
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>{changeVersion ? "Thêm sản phẩm" : "Sửa sản phẩm"}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập tên sản phẩm"
                      type="text"
                      value={title}
                      onChange={(title) => setTitle(title.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập giá sản phẩm"
                      value={price}
                      type="number"
                      onChange={(price) => setPrice(price.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập mô tả"
                      type="text"
                      value={content}
                      onChange={(content) => setContent(content.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" onClick={onAddSubmit}>
                      {changeVersion ? "Thêm" : "Sửa"}
                    </button>
                    <button>Hủy</button>
                    <button onClick={onGetList}>onGetList</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm </th>
                  <th>Giá Sản phẩm</th>
                  <th>Mô tả</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {listSelecter?.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.content}</td>
                    <td>
                      <button onClick={(id) => onDeleteProducts(item.id)}>
                        Xóa
                      </button>
                      <button onClick={(id) => onPutProducts(item.id, item)}>
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))}
                <button
                  onClick={() => {
                    onChangeVersion();
                  }}
                >
                  Thêm
                </button>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
