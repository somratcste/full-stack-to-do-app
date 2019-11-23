package info.somrat.rest.entity;


import lombok.Data;

import java.util.Date;
import javax.persistence.*;

@Entity
@Data
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String description;

    @Column
    private Date targetDate;

    @Column(columnDefinition="tinyint(1) default 0")
    private boolean isDone;

    protected Todo() {

    }

    public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

}