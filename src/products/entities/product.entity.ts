import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './';
import { User } from '../../auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products'})
export class Product {
    @ApiProperty({
        example: '04db3cce-c784-4752-a6fa-2a5b2e2c99ba',
        description: 'The id of the product',
        uniqueItems: true,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'Tshirt',
        description: 'The title of the product',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true,
    })
    title: string;

    @ApiProperty({
        example: 0.00,
        description: 'The price of the product',
        minimum: 0.00,
    })
    @Column('float', {
        default: 0,
    })
    price: number;

    @ApiProperty({
        example: 'This is a tshirt',
        description: 'The description of the product',
    })
    @Column('text', {
        nullable: true,
    })
    description: string;

    @ApiProperty({
        example: 'tshirt',
        description: 'The slug of the product',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true,
    })
    slug: string;

    @ApiProperty({
        example: 0,
        description: 'The stock of the product',
        default: 0,
    })
    @Column('int', {
        default: 0,
    })
    stock: number;

    @ApiProperty({
        example: ['S', 'M', 'L'],
        description: 'The sizes of the product',
    })
    @Column('text', {
        array: true,
    })
    sizes: string[];

    @ApiProperty({
        example: 'women',
        description: 'The gender of the product',
    })
    @Column('text')
    gender: string;

    @ApiProperty({
        example: ['tshirt', 'clothes'],
        description: 'The tags of the product',
    })
    @Column('text', {
        array: true,
        default: []
    })
    tags: string[];

    @ApiProperty()
    @OneToMany(
        () => ProductImage,
        productImage => productImage.product,
        { cascade: true, eager: true}
    )
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        (user) => user.product,
        { eager: true}
    )
    user: User

    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title;
        } 

        this.slug = this.slug
            .toLocaleLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');        
    }

    @BeforeUpdate()
    checkSlugUpdate(){
        this.slug = this.slug
            .toLocaleLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }
}
