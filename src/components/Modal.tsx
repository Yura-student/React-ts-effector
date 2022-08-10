import { Button, Modal, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

const Mod = () => {
  const [visible, setVisible] = useState(false);
  

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e:React.MouseEvent) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e:React.MouseEvent) => {
    console.log(e);
    setVisible(false);
  };



/*   const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
 */
interface AddModal{
    id: string
}

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <Modal
        title="Добавление чека"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >

    {<label htmlFor="start">Дата и время: </label>}
        <input
            type='datetime-local'
            className='add'
            id='start'
            min='2020-01-01'
            max='2022-12-31'
        />
        <input
            type='text'
            className='add'
            placeholder='Введите киоск'
        />
        <input
            type='text'
            className='add'
            placeholder='Продажа или возврат'
        />
        <Radio.Group value={click} >
        <Radio.Button value="0">Продажа</Radio.Button>
        <Radio.Button value="1">Возврат</Radio.Button>
        </Radio.Group>
        <input
            type='text'
            className='add'
            placeholder='Статус оплаты'
        />
        <input
            type='number'
            className='add'
            placeholder='Оплата'
        />
        <input
            type='number'
            className='add'
            placeholder='Сумма'
        />
        <input
            type='number'
            className='add'
            placeholder='Кол-во товара'
        />
        <input
            type='string'
            className='add'
            placeholder='Товары'
        />
      </Modal>
    </>
  );
};

export default Mod;