package com.example.kotlindemo.model

import javax.persistence.*


@Entity
@Table(name = "customer")
class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var customerid: Int? = null
  var email: String? = null
  var password: String? = null
  var fullname: String? = null
  var address: String? = null
  var phonenumber: String? = null // getters and setters
}
