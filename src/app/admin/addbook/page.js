import React from 'react';
import '../../../style/addform.css';

function AddBook() {
  return (
    <div className="main-content">
      <div className="page-header">
        <h2 className="page-title">Thêm sách</h2>
      </div>

      <div className="form-container">
        <form className="book-form">
          <div className="form-group">
            <label htmlFor="title">Tên sách</label>
            <input type="text" id="title" name="title" />
          </div>

          <div className="form-group">
            <label htmlFor="image">Ảnh sách</label>
            <input type="file" id="image" name="image" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Tác giả</label>
            <input type="text" id="author" name="author" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Danh mục</label>
            <select id="category" name="category">
              <option>-- Chọn danh mục --</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Số lượng</label>
            <input type="number" id="quantity" name="quantity" defaultValue="0" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Mô tả</label>
            <textarea id="description" name="description" rows="3" />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-confirm">
              <i className="fa fa-check-circle" style={{ marginRight: '4px' }}></i>
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
