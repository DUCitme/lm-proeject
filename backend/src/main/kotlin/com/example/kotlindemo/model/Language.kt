package com.example.kotlindemo.model

import javax.persistence.*


@Entity
@Table(name = "languages")
class Language {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var languaesid: Int? = null
  var languaesname: String? = null // getters and setters
}
