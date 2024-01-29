package com.example.kotlindemo.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table


@Entity
@Table(name = "category")
class Category {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var categoryid: Int? = null
  var categoryname: String? = null // getters and setters
}
