package com.backend.guidence.Entity;

import jakarta.persistence.*;
import java.util.*;
import lombok.*;

@Entity 
@Table(name="users")
@Getter 
@Setter 
@NoArgsConstructor 
@AllArgsConstructor 
public class User {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    
    private String name;
    private String department;
    @Enumerated(EnumType.STRING)
    private Status status;
    private Integer batch;
    @OneToMany(mappedBy="owner")
    private List<Post> posts;
    public enum Status{
        FIRST_YEAR,
        SECOND_YEAR,
        THIRD_YEAR,
        FOURTH_YEAR,
        ALUMNI
    }
}
