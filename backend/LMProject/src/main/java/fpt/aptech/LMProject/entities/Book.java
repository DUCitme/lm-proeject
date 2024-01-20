package fpt.aptech.LMProject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "Book")
@Data
public class Book{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BookID")
    private int bookID;

    @Column(name = "Title")
    private String  title;

    @Column(name = "Author")
    private String  author;

    @Column(name = "Description")
    private String description;

    @Column(name = "Price")
    private String price;

    // @Column(name = "CategoryID")
    // private int categoryID;
    
    @Column(name = "StockQuantity")
    private String stockQuantity;

    @Column(name = "ImageURL")
    private String imageURL;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CategoryID")
    private Category category;

}


