import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Posts } from "./Posts";


@Entity({ schema: 'sample_db', name: 'users' }) // schema - DB명, name - 테이블명
export class Users{
    @PrimaryGeneratedColumn({type:'int',name:'id'}) // primary key - id
    id:number;

    @Column('varchar', {name:'email', unique:true ,length:30})
    email:string;

    @Column('varchar',{name:'name', length:20})
    name:string;

    @Column('int',{name:'age'})
    age:number;

    @CreateDateColumn() // 언제 생성되었나
    createdAt: Date;

    @UpdateDateColumn() // 언제 수정되었나
    updatedAt: Date;

    @DeleteDateColumn() // 언제 삭제되었나
    deletedAt: Date | null;

    @OneToMany(
        ()=>Posts,
        (posts)=>posts.UserId
    )
    OwnedUserPosts:Posts[] // Posts와 관계설정
}