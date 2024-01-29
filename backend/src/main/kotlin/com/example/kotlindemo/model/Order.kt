package com.example.kotlindemo.model

import javax.persistence.*


@Entity
@Table(name = "orders")
class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var orderid: Int? = null
  var customerid: Int? = null
  var orderdate: String? = null
  var totalamount: String? = null
  var orderstatus: String? = null
  var shippingaddress: String? = null
  var paymentmethod: String? = null // getters and setters
}
