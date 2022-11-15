package com.Gchange.demo.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


@Entity

public class img {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String name;
    private String mime;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(length = 500000)
    private byte[] content;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMime() {
        return mime;
    }

    public void setMime(String mime) {
        this.mime = mime;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public img() {
    }

    public img(String name, String mime, byte[] content){ this.name = name; this.mime = mime; this.content = content;}
}


