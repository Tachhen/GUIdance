package com.backend.guidence.Entity;

import jakarta.persistence.*;
import java.util.*;
import java.time.LocalDate;
import lombok.*;

@Entity 
@Table(name="posts")
@Getter 
@Setter 
@NoArgsConstructor 
@AllArgsConstructor 
public class Post {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate datePosted;
    private String company;
    @Enumerated(EnumType.STRING)
    private Outcome outcome;
    @Column(columnDefinition = "Text")
    private String content;
    @ManyToOne 
    @JoinColumn(name="owner_id")
    private  User owner;
    public enum Outcome{
        POSITIVE,
        NEGATIVE
    }
}
