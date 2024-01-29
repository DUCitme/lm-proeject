package com.example.kotlindemo.model

import java.math.BigDecimal
import javax.persistence.*


@Entity
@Table(name = "ordersdetail")
class OrderDetail {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var orderdetailid: Int? = null
  var orderid: Int? = null
  var bookid: Int? = null
  var quantity: Int? = null
  var subtotal: BigDecimal? = null // getters and setters
}
