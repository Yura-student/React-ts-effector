import { Button, Modal, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'
import { addModalForm } from 'src/API/cheques/store/addCheques';

/* const Mod: React.FC = () => { */
  
export const Mod = () => {
  const { fields, values, submit } = useForm(addModalForm)

  const [visible, setVisible] = useState(false);
  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    submit();
  };

  const handleCancel = () => {
    setVisible(false);
  };  
  
console.log(values);
interface AddModal{
    id: string
}
console.log(fields.kioskName.isValid);


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <Modal
        title="Добавление чека"
        visible={visible}
        onOk = {handleOk}
        onCancel={handleCancel}
      >
        {<label htmlFor="start">Дата и время: </label>}
        <input
            type='datetime-local'
            className='add'
            id='start'
            min='2020-01-01'
            max='2022-12-31'
            onChange={ event => fields.dateReg.onChange(event.target.value)
            }
        />
        <div>
            {fields.dateReg.errorText({
                "дата и время": "Заполните все поля",
            })}
        </div>
        <input
            type='text'
            className='add'
            placeholder='Введите киоск'
            onChange={ event => fields.kioskName.onChange(event.target.value) }
        />
        <div>
            {!fields.kioskName.isValid && 
                "Киоск : Заполните все поля"
            }
        </div>
        <input
            type='text'
            className='add'
            placeholder='Статус оплаты'
            onChange={ event => fields.paysTatus.onChange(event.target.value) }
        />
        <div>
            {fields.paysTatus.errorText({
                "Статус оплаты": "Заполните все поля",
            })}
        </div>
        <input
            type='number'
            className='add'
            placeholder='Внесено'
            onChange={ event => fields.pay.onChange(event.target.value) }
        />
        <div>
            {fields.pay.errorText({
                "Внесено": "Заполните все поля",
            })}
        </div>
        <input
            type='number'
            className='add'
            placeholder='Сумма оплаты'
            onChange={ event => fields.sum.onChange(event.target.value) }
        />
        <div>
            {fields.dateReg.errorText({
                "Сумма": "Заполните все поля",
            })}
        </div>
        <input
            type='number'
            className='add'
            placeholder='Кол-во товара'
            onChange={ event => fields.positions.onChange(event.target.value) }
        />
        <div>
            {fields.positions.errorText({
                "Кол-во товара": "Заполните все поля",
            })}
        </div>
        <input
            type='string'
            className='add'
            placeholder='Товары'
            onChange={ event => fields.positionsName.onChange(event.target.value) }
        />
        <div>
            {fields.positionsName.errorText({
                "товары": "Заполните все поля",
            })}
        </div>
        <Radio.Group onChange={ event => fields.chequeType.onChange(event.target.value) } >
        <Radio.Button value='0'>Продажа</Radio.Button>
        <Radio.Button value='1'>Возврат</Radio.Button>
        </Radio.Group>
        <div>
            {fields.chequeType.errorText({
                "выберите": "Заполните все поля",
            })}
        </div>
        </Modal>
    </>
  );
};

export default Mod;