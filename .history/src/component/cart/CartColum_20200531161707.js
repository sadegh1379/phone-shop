import React from 'react'

export default function CartColum() {
    return (
        <div className="row d-flex justify-content-between text-center  d-lg-flex">
            <div className="col-10 d-none col-lg-2">نام</div>
            <div className="col-10 d-none col-lg-2">هزینه</div>
            <div className="col-10 d-none col-lg-2">تعداد</div>
            <div className="col-10 d-none col-lg-2">عکس</div>
            <div className="col-10 d-none col-lg-2">حذف</div>
            <div className="col-10 d-none col-lg-2">هزینه کل</div>
        </div>
    )
}
