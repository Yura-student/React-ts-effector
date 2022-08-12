import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

//Тестовая модалка

export const DeleteModal = () => {

  const [visible, setVisible] = useState(false);
  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Удалить через Modal
      </Button>
      <Modal
        title="Точно"
        visible={visible}
        onOk = {handleOk}
        okText = 'Удалить'
        cancelText = 'Закрыть'
        onCancel={handleCancel}
      >
      </Modal>
    </>
  );
}

export default DeleteModal;