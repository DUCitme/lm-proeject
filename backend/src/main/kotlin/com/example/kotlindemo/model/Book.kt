package com.example.kotlindemo.model

import java.math.BigDecimal
import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
@Table(name = "book")
class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var bookid: Long? = null

    var title: String? = null
    var author: String? = null
    var categoryid: Int? = null
    var price: BigDecimal? = null
    var description: String? = null
    var stockquantity: Int? = null
    var isbn: String? = null
    var publishedDate: String? = null
    var image: String? = null
    var languageID: Int? = null
    var publisherID: Int? = null
    var weight: Int? = null
    var page: Int? = null
    var dimensions: String? = null
    var featured: Boolean? = null
    var bestseller: Boolean? = null // getters and setters
}
