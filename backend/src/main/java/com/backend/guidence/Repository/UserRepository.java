package com.backend.guidence.Repository;
import com.backend.guidence.Entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
